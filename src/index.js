/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly";
import { blocks } from "./blocks/text";
import { forBlock, forBlockI } from "./generators/javascript";
import { javascriptGenerator } from "blockly/javascript";
import * as Ja from "blockly/msg/ja";
import { save, load } from "./serialization";
import { toolbox } from "./toolbox";
import { Msg } from "./msg";
import "./index.css";

import p5 from "p5";

// Set Blockly messages to Japanese
Blockly.setLocale(Ja);
Object.assign(Blockly.Msg, Msg);

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);
const instanceModeGenerator = Object.create(javascriptGenerator);
instanceModeGenerator.forBlock = Object.create(javascriptGenerator.forBlock);
Object.assign(instanceModeGenerator.forBlock, forBlockI);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById("generatedCode").firstChild;
const codeIDiv = document.getElementById("generatedCodeI").firstChild;
const outputDiv = document.getElementById("output");
const blocklyDiv = document.getElementById("blocklyDiv");
const ws = Blockly.inject(blocklyDiv, { toolbox });

ws.addChangeListener(Blockly.Events.disableOrphans);

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  const codeI = instanceModeGenerator.workspaceToCode(ws);
  codeIDiv.innerText = codeI;
  outputDiv.innerHTML = "";
  const code1 = `
const sketch = (p) => {
${codeI}
};
const div = document.getElementById('outputPane');
if (div) {
  // 排他制御をして、複数の p5 インスタンスが同時に生成されないようにする。
  navigator.locks.request("canvas", async (lock) => {
    for (const child of div.querySelectorAll('canvas')) {
      child.remove();
    }
    new p5(sketch, div);
  });
}
`;
  eval(code1);
};

const params = new URLSearchParams(window.location.search);
const sample = params.get("sample");
let initJson = null;

function loadSample() {
  if (initJson) {
    Blockly.serialization.workspaces.load(initJson, ws);
    return;
  }
  if (!sample) return;
  fetch(sample)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      initJson = json;
      Blockly.serialization.workspaces.load(json, ws);
    });
}
// Load the initial state from storage and run the code.
if (!load(ws, sample)) {
  // If there was no saved state, create a default block.
  loadSample();
}
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws, sample);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});

function replaceIdWithName(obj, workspace) {
  if (typeof obj !== "object" || obj === null) return;

  for (let key in obj) {
    if (key === "id" && typeof obj[key] === "string") {
      delete obj[key];
    }

    // 変数参照フィールド（VAR など）を探す
    if (obj.fields && obj.fields.VAR && typeof obj.fields.VAR === "object") {
      const varId = obj.fields.VAR.id;
      const variable = workspace.getVariableById(varId);
      if (variable) {
        // ID の代わりに名前を直接入れる、または構造を書き換える
        obj.fields.VAR.name = variable.name;
      }
    }

    // 再帰的に子要素（inputs や blocks）を探索
    replaceIdWithName(obj[key], workspace);
  }
}

function saveWorkspaceWithNames(state, workspace) {
  // 1. 変数定義の変換 (id を消して name を主軸にする)
  if (state.variables) {
    state.variables = state.variables.map((v) => {
      return { name: v.name, type: v.type }; // id を含めない
    });
  }

  // 2. ブロック内の変数参照を書き換え (再帰的な処理)
  if (state.blocks) {
    replaceIdWithName(state.blocks, workspace);
  }

  return state;
}

const jsonDialog = document.getElementById("jsonDialog");
const jsonContent = document.getElementById("jsonContent");
document.getElementById("closeJsonDialog").addEventListener("click", () => {
  jsonDialog.close();
});

// コンテキストメニューに JSON を表示する項目を追加する
const jsonTemplate = {
  id: "showJson",
  displayText: () => "JSON を表示する",
  preconditionFn: (scope) => {
    const node = scope.focusedNode;
    if (
      node instanceof Blockly.BlockSvg ||
      node instanceof Blockly.WorkspaceSvg
    ) {
      return "enabled";
    }
    return "hidden";
  },
  callback: (scope) => {
    const node = scope.focusedNode;
    if (node instanceof Blockly.BlockSvg) {
      const block = Blockly.serialization.blocks.save(node);
      replaceIdWithName(block, ws);
      jsonContent.textContent = JSON.stringify(block, null, 2);
      jsonDialog.showModal();
      console.log(block);
    } else if (node instanceof Blockly.WorkspaceSvg) {
      const state = Blockly.serialization.workspaces.save(node);
      saveWorkspaceWithNames(state, ws);
      jsonContent.textContent = JSON.stringify(state, null, 2);
      jsonDialog.showModal();
      console.log(state);
    }
  },
};

Blockly.ContextMenuRegistry.registry.register(jsonTemplate);

const initializeTemplate = {
  id: "initialize",
  displayText: () => "初期化する",
  preconditionFn: (scope) => {
    const node = scope.focusedNode;
    if (node instanceof Blockly.WorkspaceSvg) {
      return "enabled";
    }
    return "hidden";
  },
  callback: (scope) => {
    const node = scope.focusedNode;
    if (node instanceof Blockly.WorkspaceSvg) {
      if (confirm("ワークスペースを最初の状態に戻します。よろしいですか？")) {
        node.clear();
        loadSample();
      }
    }
  },
};

Blockly.ContextMenuRegistry.registry.register(initializeTemplate);

function openTab(evt, tabName) {
  // すべてのコンテンツを非表示にする
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  // すべてのボタンからactiveクラスを消す
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // 指定されたタブを表示し、ボタンにactiveクラスをつける
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

document
  .getElementById("btn1")
  .addEventListener("click", (e) => openTab(e, "generatedCode"));
document
  .getElementById("btn2")
  .addEventListener("click", (e) => openTab(e, "generatedCodeI"));
document
  .getElementById("btn3")
  .addEventListener("click", (e) => openTab(e, "output"));

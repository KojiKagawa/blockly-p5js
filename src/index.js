/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import { blocks } from './blocks/text';
import { forBlock, forBlockI } from './generators/javascript';
import { javascriptGenerator } from 'blockly/javascript';
import * as Ja from 'blockly/msg/ja';
import { save, load } from './serialization';
import { toolbox } from './toolbox';
import './index.css';

import p5 from 'p5';

// Set Blockly messages to Japanese
Blockly.setLocale(Ja);

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);
const instanceModeGenerator = Object.create(javascriptGenerator);
instanceModeGenerator.forBlock = Object.create(javascriptGenerator.forBlock);
Object.assign(instanceModeGenerator.forBlock, forBlockI);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const codeIDiv = document.getElementById('generatedCodeI').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
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
  outputDiv.innerHTML = '';
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

// Load the initial state from storage and run the code.
if (!load(ws)) {
    // If there was no saved state, create a default block.
    const params = new URLSearchParams(window.location.search);
    const sample = params.get('sample');
    if (sample) {
      fetch(sample).then((response) => response.json())
        .then((json) => {
          console.log(json);
          Blockly.serialization.workspaces.load(json, ws);
        });
    }
}
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
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

function removeIds(obj) {
  if (obj && typeof obj === 'object') {
    delete obj.id; // id属性を削除
    for (var key in obj) {
      if (typeof obj[key] === 'object') {
        removeIds(obj[key]); // 子要素も再帰的に処理
      }
    }
  }
}

const jsonDialog = document.getElementById('jsonDialog');
const jsonContent = document.getElementById('jsonContent');
document.getElementById('closeJsonDialog').addEventListener('click', () => {
  jsonDialog.close();
});

// コンテキストメニューに JSON を表示する項目を追加する
const jsonTemplate = {
  id: 'showJson',
  displayText: () => "JSON を表示する",
  preconditionFn: (scope) => {
    const node = scope.focusedNode;
    if (node instanceof Blockly.BlockSvg 
      || node instanceof Blockly.WorkspaceSvg ) {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: (scope) => {
    const node = scope.focusedNode;
    if (node instanceof Blockly.BlockSvg) {
      const block = Blockly.serialization.blocks.save(node);
      removeIds(block);
      jsonContent.textContent = JSON.stringify(block, null, 2);
      jsonDialog.showModal();
      console.log(block);
    } else if (node instanceof Blockly.WorkspaceSvg) {
      const state = Blockly.serialization.workspaces.save(node);
      removeIds(state);
      jsonContent.textContent = JSON.stringify(state, null, 2);
      jsonDialog.showModal();
      console.log(state);
    }
  }
};

Blockly.ContextMenuRegistry.registry.register(jsonTemplate);

function openTab(evt, tabName) {
  // すべてのコンテンツを非表示にする
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // すべてのボタンからactiveクラスを消す
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // 指定されたタブを表示し、ボタンにactiveクラスをつける
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

document.getElementById("btn1").addEventListener("click", (e) => openTab(e, "generatedCode"));
document.getElementById("btn2").addEventListener("click", (e) => openTab(e, "generatedCodeI"));
document.getElementById("btn3").addEventListener("click", (e) => openTab(e, "output"));

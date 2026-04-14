/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  type: 'add_text',
  message0: 'Add text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: '',
  helpUrl: '',
};

const draw = {
  "type": "draw",
  "tooltip": "",
  "helpUrl": "",
  "message0": "draw() %1 %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": "D"
    },
    {
      "type": "input_statement",
      "name": "SS"
    }
  ],
  "nextStatement": null,
  "colour": 285
};

const setup = {
  "type": "setup",
  "tooltip": "",
  "helpUrl": "",
  "message0": "setup() %1 %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": "D"
    },
    {
      "type": "input_statement",
      "name": "SS"
    }
  ],
  "nextStatement": null,
  "colour": 285
};

const preload = {
  "type": "preload",
  "tooltip": "",
  "helpUrl": "",
  "message0": "preload() %1 %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": "D"
    },
    {
      "type": "input_statement",
      "name": "SS"
    }
  ],
  "nextStatement": null,
  "colour": 285
};

const createCanvas = {
  "type": "create_canvas",
  "tooltip": "",
  "helpUrl": "",
  "message0": "createCanvas( %1 %2 , %3 %4 ); %5",
  "args0": [
    {
      "type": "input_dummy",
      "name": "L"
    },
    {
      "type": "input_value",
      "name": "WIDTH",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "C"
    },
    {
      "type": "input_value",
      "name": "HEIGHT",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "R"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "inputsInline": true
};

const ellipse = {
  "type": "ellipse",
  "tooltip": "",
  "helpUrl": "",
  "message0": "ellipse( %1 %2 , %3 %4 , %5 %6 , %7 %8 ); %9",
  "args0": [
    {
      "type": "input_dummy",
      "name": "L"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "C1"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "C2"
    },
    {
      "type": "input_value",
      "name": "WIDTH",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "C3"
    },
    {
      "type": "input_value",
      "name": "HEIGHT",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "R"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "inputsInline": true
};

const line = {
  "type": "line",
  "tooltip": "",
  "helpUrl": "",
  "message0": "line( %1 %2 , %3 %4 , %5 %6 , %7 %8 ); %9",
  "args0": [
    {
      "type": "input_dummy",
      "name": "L"
    },
    {
      "type": "input_value",
      "name": "X1",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "C1"
    },
    {
      "type": "input_value",
      "name": "Y1",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "C2"
    },
    {
      "type": "input_value",
      "name": "X2",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "C3"
    },
    {
      "type": "input_value",
      "name": "Y2",
      "check": "Number"
    },
    {
      "type": "input_dummy",
      "name": "R"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "inputsInline": true
};

                    
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  addText,
  draw,
  setup,
  preload,
  createCanvas,
  ellipse,
  line,
]);

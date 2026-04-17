/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  type: "add_text",
  message0: "%1 を出力する",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: "",
  helpUrl: "",
};

const draw = {
  type: "draw",
  tooltip: "",
  helpUrl: "",
  message0: "draw() {...} %1 %2",
  args0: [
    {
      type: "input_dummy",
      name: "D",
    },
    {
      type: "input_statement",
      name: "SS",
    },
  ],
  colour: 285,
};

const setup = {
  type: "setup",
  tooltip: "",
  helpUrl: "",
  message0: "setup() {...} %1 %2",
  args0: [
    {
      type: "input_dummy",
      name: "D",
    },
    {
      type: "input_statement",
      name: "SS",
    },
  ],
  colour: 285,
};

const preload = {
  type: "preload",
  tooltip: "",
  helpUrl: "",
  message0: "preload() {...} %1 %2",
  args0: [
    {
      type: "input_dummy",
      name: "D",
    },
    {
      type: "input_statement",
      name: "SS",
    },
  ],
  colour: 285,
};

const createCanvas = {
  type: "create_canvas",
  tooltip: "",
  helpUrl: "",
  message0: "createCanvas( %1 , %2 ); %3",
  args0: [
    {
      type: "input_value",
      name: "WIDTH",
      check: "Number",
    },
    {
      type: "input_value",
      name: "HEIGHT",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const ellipse = {
  type: "ellipse",
  tooltip: "",
  helpUrl: "",
  message0: "ellipse( %1 , %2 , %3 , %4 ); %5",
  args0: [
    {
      type: "input_value",
      name: "X",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y",
      check: "Number",
    },
    {
      type: "input_value",
      name: "WIDTH",
      check: "Number",
    },
    {
      type: "input_value",
      name: "HEIGHT",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const arc = {
  type: "arc",
  tooltip: "",
  helpUrl: "",
  message0: "arc( %1 , %2 , %3 , %4 , %5 , %6 ); %7",
  args0: [
    {
      type: "input_value",
      name: "X",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y",
      check: "Number",
    },
    {
      type: "input_value",
      name: "WIDTH",
      check: "Number",
    },
    {
      type: "input_value",
      name: "HEIGHT",
      check: "Number",
    },
    {
      type: "input_value",
      name: "START_ANGLE",
      check: "Number",
    },
    {
      type: "input_value",
      name: "END_ANGLE",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const rect = {
  type: "rect",
  tooltip: "",
  helpUrl: "",
  message0: "rect( %1 , %2 , %3 , %4 ); %5",
  args0: [
    {
      type: "input_value",
      name: "X",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y",
      check: "Number",
    },
    {
      type: "input_value",
      name: "WIDTH",
      check: "Number",
    },
    {
      type: "input_value",
      name: "HEIGHT",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const line = {
  type: "line",
  tooltip: "",
  helpUrl: "",
  message0: "line( %1 , %2 , %3 , %4 ); %5",
  args0: [
    {
      type: "input_value",
      name: "X1",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y1",
      check: "Number",
    },
    {
      type: "input_value",
      name: "X2",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y2",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const triangle = {
  type: "triangle",
  tooltip: "",
  helpUrl: "",
  message0: "triangle( %1 , %2 , %3 , %4 , %5 , %6 ); %7",
  args0: [
    {
      type: "input_value",
      name: "X1",
    },
    {
      type: "input_value",
      name: "Y1",
    },
    {
      type: "input_value",
      name: "X2",
    },
    {
      type: "input_value",
      name: "Y2",
    },
    {
      type: "input_value",
      name: "X3",
    },
    {
      type: "input_value",
      name: "Y3",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const quad = {
  type: "quad",
  tooltip: "",
  helpUrl: "",
  message0: "quad( %1 , %2 , %3 , %4 , %5 , %6 , %7 , %8 ); %9",
  args0: [
    {
      type: "input_value",
      name: "X1",
    },
    {
      type: "input_value",
      name: "Y1",
    },
    {
      type: "input_value",
      name: "X2",
    },
    {
      type: "input_value",
      name: "Y2",
    },
    {
      type: "input_value",
      name: "X3",
    },
    {
      type: "input_value",
      name: "Y3",
    },
    {
      type: "input_value",
      name: "X4",
    },
    {
      type: "input_value",
      name: "Y4",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const background = {
  type: "background",
  tooltip: "",
  helpUrl: "",
  message0: "background( %1 ); %2",
  args0: [
    {
      type: "input_value",
      name: "COLOR",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const stroke = {
  type: "stroke",
  tooltip: "",
  helpUrl: "",
  message0: "stroke( %1 ); %2",
  args0: [
    {
      type: "input_value",
      name: "COLOR",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const fill = {
  type: "fill",
  tooltip: "",
  helpUrl: "",
  message0: "fill( %1 ); %2",
  args0: [
    {
      type: "input_value",
      name: "COLOR",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const strokeWeight = {
  type: "stroke_weight",
  tooltip: "",
  helpUrl: "",
  message0: "strokeWeight( %1 ); %2",
  args0: [
    {
      type: "input_value",
      name: "WIDTH",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const noStroke = {
  type: "no_stroke",
  tooltip: "",
  helpUrl: "",
  message0: "noStroke(); %1",
  args0: [
    {
      type: "input_dummy",
      name: "L",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const noFill = {
  type: "no_fill",
  tooltip: "",
  helpUrl: "",
  message0: "noFill(); %1",
  args0: [
    {
      type: "input_dummy",
      name: "L",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const noLoop = {
  type: "no_loop",
  tooltip: "",
  helpUrl: "",
  message0: "noLoop(); %1",
  args0: [
    {
      type: "input_dummy",
      name: "L",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 291,
  inputsInline: true,
};

const oklcha = {
  type: "oklcha",
  tooltip: "",
  helpUrl: "",
  message0: "`oklch( %1 %%  %2 %%  %3  /  %4 )` %5",
  args0: [
    {
      type: "input_value",
      name: "L",
      check: "Number",
    },
    {
      type: "input_value",
      name: "C",
      check: "Number",
    },
    {
      type: "input_value",
      name: "H",
      check: "Number",
    },
    {
      type: "input_value",
      name: "A",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  output: null,
  colour: 21,
  inputsInline: true,
};

const rgba = {
  type: "rgba",
  tooltip: "",
  helpUrl: "",
  message0: "`rgb( %1  %2  %3 / %4 )` %5",
  args0: [
    {
      type: "input_value",
      name: "R",
      check: "Number",
    },
    {
      type: "input_value",
      name: "G",
      check: "Number",
    },
    {
      type: "input_value",
      name: "B",
      check: "Number",
    },
    {
      type: "input_value",
      name: "A",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  output: null,
  colour: 21,
  inputsInline: true,
};

const hsla = {
  type: "hsla",
  tooltip: "",
  helpUrl: "",
  message0: "`hsl( %1 %2 %%  %3 %%  / %4 )` %5",
  args0: [
    {
      type: "input_value",
      name: "H",
      check: "Number",
    },
    {
      type: "input_value",
      name: "S",
      check: "Number",
    },
    {
      type: "input_value",
      name: "L",
      check: "Number",
    },
    {
      type: "input_value",
      name: "A",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  output: null,
  colour: 21,
  inputsInline: true,
};

const textSize = {
  type: "text_size",
  tooltip: "",
  helpUrl: "",
  message0: "textSize( %1 ); %2",
  args0: [
    {
      type: "input_value",
      name: "SIZE",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const textFont = {
  type: "text_font",
  tooltip: "",
  helpUrl: "",
  message0: "textFont( %1 ); %2",
  args0: [
    {
      type: "input_value",
      name: "FONT",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 21,
  inputsInline: true,
};

const p5Text = {
  type: "p5_text",
  tooltip: "",
  helpUrl: "",
  message0: "text( %1 , %2 , %3 ); %4",
  args0: [
    {
      type: "input_value",
      name: "TEXT",
      check: "String",
    },
    {
      type: "input_value",
      name: "X",
      check: "Number",
    },
    {
      type: "input_value",
      name: "Y",
      check: "Number",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 231,
  inputsInline: true,
};

const p5Random = {
  type: "p5_random",
  tooltip: "",
  helpUrl: "",
  message0: "%1 ( %2 ) %3",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["random", "RANDOM"],
        ["randomGaussian", "RANDOM_GAUSSIAN"],
      ],
    },
    {
      type: "input_value",
      name: "ARG",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  output: null,
  colour: 231,
  inputsInline: true,
};

const p5Random2 = {
  type: "p5_random2",
  tooltip: "",
  helpUrl: "",
  message0: "%1 ( %2 , %3 ) %4",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["random", "RANDOM"],
        ["randomGaussian", "RANDOM_GAUSSIAN"],
      ],
    },
    {
      type: "input_value",
      name: "ARG1",
    },
    {
      type: "input_value",
      name: "ARG2",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  output: null,
  colour: 231,
  inputsInline: true,
};

const p5RandomSeed = {
  type: "p5_random_seed",
  tooltip: "",
  helpUrl: "",
  message0: "randomSeed( %1 ); %2",
  args0: [
    {
      type: "input_value",
      name: "SEED",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 225,
  inputsInline: true,
};

const p5Atan2 = {
  type: "p5_atan2",
  tooltip: "",
  helpUrl: "",
  message0: "atan2( %1 , %2 ); %3",
  args0: [
    {
      type: "input_value",
      name: "Y",
    },
    {
      type: "input_value",
      name: "X",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  output: null,
  colour: 225,
  inputsInline: true,
};

const p5Trig = {
  type: "p5_trig",
  tooltip: "",
  helpUrl: "",
  message0: "%1 ( %2 ) %3",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["sin", "SIN"],
        ["cos", "COS"],
        ["tan", "TAN"],
        ["asin", "ASIN"],
        ["acos", "ACOS"],
        ["atan", "ATAN"],
        ["degrees", "DEGREES"],
        ["radians", "RADIANS"],
      ],
    },
    {
      type: "input_value",
      name: "NUM",
    },
    {
      type: "input_dummy",
      name: "R",
    },
  ],
  output: null,
  colour: 225,
  inputsInline: true,
};

const p5Round = {
  "type": "p5_round",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 ( %2 ) %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "ceil",
          "CEIL"
        ],
        [
          "floor",
          "FLOOR"
        ],
        [
          "round",
          "ROUND"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "NUM"
    },
    {
      "type": "input_dummy",
      "name": "R"
    }
  ],
  "output": null,
  "colour": 225,
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
  arc,
  rect,
  triangle,
  quad,
  line,
  background,
  stroke,
  fill,
  strokeWeight,
  noStroke,
  noFill,
  noLoop,
  oklcha,
  rgba,
  hsla,
  textSize,
  textFont,
  p5Text,
  p5Random,
  p5Random2,
  p5RandomSeed,
  p5Atan2,
  p5Trig,
  p5Round,
]);

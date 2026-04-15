/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);
export const forBlockI = Object.create(null);

forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  outputDiv.appendChild(textEl);
}`,
  );
  // Generate the function call for this block.
  const code = `${addText}(${text});\n`;
  return code;
};

forBlock['draw'] = function(block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'function draw() {\n' + statement_ss + '}\n';
  return code;
}

forBlockI['draw'] = function(block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'p.draw = () => {\n' + statement_ss + '};\n';
  return code;
}

forBlock['setup'] = function(block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'function setup() {\n' + statement_ss + '}\n';
  return code;
}

forBlockI['setup'] = function(block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'p.setup = () => {\n' + statement_ss + '};\n';
  return code;
}

forBlock['preload'] = function(block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'function preload() {\n' + statement_ss + '}\n';
  return code;
}

forBlockI['preload'] = function(block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'p.preload = () => {\n' + statement_ss + '};\n';
  return code;
}

forBlock['create_canvas'] = function(block, generator) {
  const value_width = generator.valueToCode(block, 'WIDTH', Order.ATOMIC);
  const value_height = generator.valueToCode(block, 'HEIGHT', Order.ATOMIC);
  const code = `createCanvas(${value_width}, ${value_height});\n`;
  return code;
}

forBlockI['create_canvas'] = function(block, generator) {
  return `p.${forBlock['create_canvas'](block, generator)}`;
}

forBlock['ellipse'] = function(block, generator) {
  const value_x = generator.valueToCode(block, 'X', Order.ATOMIC);
  const value_y = generator.valueToCode(block, 'Y', Order.ATOMIC);
  const value_width = generator.valueToCode(block, 'WIDTH', Order.ATOMIC);
  const value_height = generator.valueToCode(block, 'HEIGHT', Order.ATOMIC);
  const code = `ellipse(${value_x}, ${value_y}, ${value_width}, ${value_height});\n`;
  return code;
}

forBlockI['ellipse'] = function(block, generator) {
  return `p.${forBlock['ellipse'](block, generator)}`;
}

forBlock['line'] = function(block, generator) {
  const value_x1 = generator.valueToCode(block, 'X1', Order.ATOMIC);
  const value_y1 = generator.valueToCode(block, 'Y1', Order.ATOMIC);
  const value_x2 = generator.valueToCode(block, 'X2', Order.ATOMIC);
  const value_y2 = generator.valueToCode(block, 'Y2', Order.ATOMIC);
  const code = `line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
  return code;
}

forBlockI['line'] = function(block, generator) {
  return `p.${forBlock['line'](block, generator)}`;
}
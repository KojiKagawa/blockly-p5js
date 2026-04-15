/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Order } from 'blockly/javascript';

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

forBlock['draw'] = function (block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'function draw() {\n' + statement_ss + '}\n';
  return code;
}

forBlockI['draw'] = function (block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'p.draw = () => {\n' + statement_ss + '};\n';
  return code;
}

forBlock['setup'] = function (block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'function setup() {\n' + statement_ss + '}\n';
  return code;
}

forBlockI['setup'] = function (block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'p.setup = () => {\n' + statement_ss + '};\n';
  return code;
}

forBlock['preload'] = function (block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'function preload() {\n' + statement_ss + '}\n';
  return code;
}

forBlockI['preload'] = function (block, generator) {
  const statement_ss = generator.statementToCode(block, 'SS');
  const code = 'p.preload = () => {\n' + statement_ss + '};\n';
  return code;
}

forBlock['create_canvas'] = function (block, generator) {
  const value_width = generator.valueToCode(block, 'WIDTH', Order.ATOMIC);
  const value_height = generator.valueToCode(block, 'HEIGHT', Order.ATOMIC);
  const code = `createCanvas(${value_width}, ${value_height});\n`;
  return code;
}

forBlockI['create_canvas'] = function (block, generator) {
  return `p.${forBlock['create_canvas'](block, generator)}`;
}

forBlock['ellipse'] = function (block, generator) {
  const value_x = generator.valueToCode(block, 'X', Order.ATOMIC);
  const value_y = generator.valueToCode(block, 'Y', Order.ATOMIC);
  const value_width = generator.valueToCode(block, 'WIDTH', Order.ATOMIC);
  const value_height = generator.valueToCode(block, 'HEIGHT', Order.ATOMIC);
  const code = `ellipse(${value_x}, ${value_y}, ${value_width}, ${value_height});\n`;
  return code;
}

forBlockI['ellipse'] = function (block, generator) {
  return `p.${forBlock['ellipse'](block, generator)}`;
}

forBlock['arc'] = function (block, generator) {
  const value_x = generator.valueToCode(block, 'X', Order.ATOMIC);
  const value_y = generator.valueToCode(block, 'Y', Order.ATOMIC);
  const value_width = generator.valueToCode(block, 'WIDTH', Order.ATOMIC);
  const value_height = generator.valueToCode(block, 'HEIGHT', Order.ATOMIC);
  const value_start = generator.valueToCode(block, 'START_ANGLE', Order.ATOMIC);
  const value_stop = generator.valueToCode(block, 'END_ANGLE', Order.ATOMIC);
  const code = `arc(${value_x}, ${value_y}, ${value_width}, ${value_height}, ${value_start}, ${value_stop});\n`;
  return code;
}

forBlockI['arc'] = function (block, generator) {
  return `p.${forBlock['arc'](block, generator)}`;
}

forBlock['rect'] = function (block, generator) {
  const value_x = generator.valueToCode(block, 'X', Order.ATOMIC);
  const value_y = generator.valueToCode(block, 'Y', Order.ATOMIC);
  const value_width = generator.valueToCode(block, 'WIDTH', Order.ATOMIC);
  const value_height = generator.valueToCode(block, 'HEIGHT', Order.ATOMIC);
  const code = `rect(${value_x}, ${value_y}, ${value_width}, ${value_height});\n`;
  return code;
}

forBlockI['rect'] = function (block, generator) {
  return `p.${forBlock['rect'](block, generator)}`;
}

forBlock['line'] = function (block, generator) {
  const value_x1 = generator.valueToCode(block, 'X1', Order.ATOMIC);
  const value_y1 = generator.valueToCode(block, 'Y1', Order.ATOMIC);
  const value_x2 = generator.valueToCode(block, 'X2', Order.ATOMIC);
  const value_y2 = generator.valueToCode(block, 'Y2', Order.ATOMIC);
  const code = `line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
  return code;
}

forBlockI['line'] = function (block, generator) {
  return `p.${forBlock['line'](block, generator)}`;
}

forBlock['triangle'] = function (block, generator) {
  const value_x1 = generator.valueToCode(block, 'X1', Order.ATOMIC);
  const value_y1 = generator.valueToCode(block, 'Y1', Order.ATOMIC);
  const value_x2 = generator.valueToCode(block, 'X2', Order.ATOMIC);
  const value_y2 = generator.valueToCode(block, 'Y2', Order.ATOMIC);
  const value_x3 = generator.valueToCode(block, 'X3', Order.ATOMIC);
  const value_y3 = generator.valueToCode(block, 'Y3', Order.ATOMIC);
  const code = `triangle(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, ${value_x3}, ${value_y3});\n`;
  return code;
};

forBlockI['triangle'] = function (block, generator) {
  return `p.${forBlock['triangle'](block, generator)}`;
}

forBlock['quad'] = function (block, generator) {
  const value_x1 = generator.valueToCode(block, 'X1', Order.ATOMIC);
  const value_y1 = generator.valueToCode(block, 'Y1', Order.ATOMIC);
  const value_x2 = generator.valueToCode(block, 'X2', Order.ATOMIC);
  const value_y2 = generator.valueToCode(block, 'Y2', Order.ATOMIC);
  const value_x3 = generator.valueToCode(block, 'X3', Order.ATOMIC);
  const value_y3 = generator.valueToCode(block, 'Y3', Order.ATOMIC);
  const value_x4 = generator.valueToCode(block, 'X4', Order.ATOMIC);
  const value_y4 = generator.valueToCode(block, 'Y4', Order.ATOMIC);
  const code = `quad(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, ${value_x3}, ${value_y3}, ${value_x4}, ${value_y4});\n`;
  return code;
}

forBlockI['quad'] = function (block, generator) {
  return `p.${forBlock['quad'](block, generator)}`;
}

forBlock['background'] = function (block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = `background(${value_color});\n`;
  return code;
}

forBlockI['background'] = function (block, generator) {
  return `p.${forBlock['background'](block, generator)}`;
}

forBlock['stroke'] = function (block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = `stroke(${value_color});\n`;
  return code;
}

forBlockI['stroke'] = function (block, generator) {
  return `p.${forBlock['stroke'](block, generator)}`;
}

forBlock['fill'] = function (block, generator) {
  const value_color = generator.valueToCode(block, 'COLOR', Order.ATOMIC);
  const code = `fill(${value_color});\n`;
  return code;
}

forBlockI['fill'] = function (block, generator) {
  return `p.${forBlock['fill'](block, generator)}`;
}

forBlock['stroke_weight'] = function (block, generator) {
  const value_width = generator.valueToCode(block, 'WIDTH', Order.ATOMIC);
  const code = `strokeWeight(${value_width});\n`;
  return code;
}

forBlockI['stroke_weight'] = function (block, generator) {
  return `p.${forBlock['stroke_weight'](block, generator)}`;
}

forBlock['no_stroke'] = function (block, generator) {
  const code = `noStroke();\n`;
  return code;
}

forBlockI['no_stroke'] = function (block, generator) {
  return `p.${forBlock['no_stroke'](block, generator)}`;
}

forBlock['no_fill'] = function (block, generator) {
  const code = `noFill();\n`;
  return code;
}

forBlockI['no_fill'] = function (block, generator) {
  return `p.${forBlock['no_fill'](block, generator)}`;
}

forBlock['no_loop'] = function (block, generator) {
  const code = `noLoop();\n`;
  return code;
}

forBlockI['no_loop'] = function (block, generator) {
  return `p.${forBlock['no_loop'](block, generator)}`;
}

forBlock['oklch'] = function (block, generator) {
  const value_l = generator.valueToCode(block, 'L', Order.NONE);
  const value_c = generator.valueToCode(block, 'C', Order.NONE);
  const value_h = generator.valueToCode(block, 'H', Order.NONE);
  const value_a = generator.valueToCode(block, 'A', Order.NONE);
  const code = value_a ? `\`oklch(${value_l}% ${value_c}% ${value_h} / ${value_a})\`` : `\`oklch(${value_l}% ${value_c}% ${value_h}\``;
  return [code, Order.ATOMIC];
}

forBlock['rgb'] = function (block, generator) {
  const value_r = generator.valueToCode(block, 'R', Order.NONE);
  const value_g = generator.valueToCode(block, 'G', Order.NONE);
  const value_b = generator.valueToCode(block, 'B', Order.NONE);
  const value_a = generator.valueToCode(block, 'A', Order.NONE);
  const code = value_a ? `\`rgb(${value_r} ${value_g} ${value_b} / ${value_a})\`` : `\`rgb(${value_r} ${value_g} ${value_b}\``;
  return [code, Order.ATOMIC];
}

forBlock['hsl'] = function (block, generator) {
  const value_h = generator.valueToCode(block, 'H', Order.NONE);
  const value_s = generator.valueToCode(block, 'S', Order.NONE);
  const value_l = generator.valueToCode(block, 'L', Order.NONE);
  const value_a = generator.valueToCode(block, 'A', Order.NONE);
  const code = value_a ? `\`hsl(${value_h} ${value_s}% ${value_l}% / ${value_a})\`` : `\`hsl(${value_h} ${value_s}% ${value_l}%\``;
  return [code, Order.ATOMIC];
}

forBlock['text_size'] = function (block, generator) {
  const value_size = generator.valueToCode(block, 'SIZE', Order.ATOMIC);
  const code = `textSize(${value_size});\n`;
  return code;
}

forBlockI['text_size'] = function (block, generator) {
  return `p.${forBlock['text_size'](block, generator)}`;
}

forBlock['text_font'] = function (block, generator) {
  const value_font = generator.valueToCode(block, 'FONT', Order.ATOMIC);
  const code = `textFont(${value_font});\n`;
  return code;
}

forBlockI['text_font'] = function (block, generator) {
  return `p.${forBlock['text_font'](block, generator)}`;
}

forBlock['p5_text'] = function (block, generator) {
  const value_text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);
  const value_x = generator.valueToCode(block, 'X', Order.ATOMIC);
  const value_y = generator.valueToCode(block, 'Y', Order.ATOMIC);
  const code = `text(${value_text}, ${value_x}, ${value_y});\n`;
  return code;
}

forBlockI['p5_text'] = function (block, generator) {
  return `p.${forBlock['p5_text'](block, generator)}`;
}
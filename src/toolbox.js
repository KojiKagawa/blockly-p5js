/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "分岐",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "繰返し",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "p5 構造",
      categorystyle: "procedure_category",
      contents: [
        {
          kind: "block",
          type: "setup",
        },
        {
          kind: "block",
          type: "draw",
        },
        {
          kind: "block",
          type: "no_loop",
        },
        {
          kind: "block",
          type: "preload",
        },
      ],
    },
    {
      kind: "category",
      name: "p5 形",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "create_canvas",
          inputs: {
            WIDTH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 320,
                },
              },
            },
            HEIGHT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 180,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "ellipse",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 160,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 90,
                },
              },
            },
            WIDTH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 180,
                },
              },
            },
            HEIGHT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 120,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arc",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 160,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 90,
                },
              },
            },
            WIDTH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 180,
                },
              },
            },
            HEIGHT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 120,
                },
              },
            },
            START_ANGLE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            END_ANGLE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 135,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rect",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 160,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 90,
                },
              },
            },
            WIDTH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 180,
                },
              },
            },
            HEIGHT: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 120,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "line",
          inputs: {
            X1: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            Y1: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            X2: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
            Y2: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 160,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "triangle",
          inputs: {
            X1: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            Y1: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 90,
                },
              },
            },
            X2: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 180,
                },
              },
            },
            Y2: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 120,
                },
              },
            },
            X3: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 90,
                },
              },
            },
            Y3: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 80,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "quad",
          inputs: {
            X1: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            Y1: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 90,
                },
              },
            },
            X2: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 180,
                },
              },
            },
            Y2: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 120,
                },
              },
            },
            X3: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 90,
                },
              },
            },
            Y3: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 80,
                },
              },
            },
            X4: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 60,
                },
              },
            },
            Y4: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "p5_text",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "🐻🐼🐶🐱",
                },
              },
            },
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 30,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "p5 色・字",
      categorystyle: "colour_category",
      contents: [
        {
          kind: "block",
          type: "background",
          inputs: {
            COLOR: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "#ffcccc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "fill",
          inputs: {
            COLOR: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "#ccffcc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "stroke",
          inputs: {
            COLOR: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "#0000ff",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "stroke_weight",
          inputs: {
            WIDTH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "no_stroke",
        },
        {
          kind: "block",
          type: "no_fill",
        },
        {
          kind: "block",
          type: "oklch",
          inputs: {
            L: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            C: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            H: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "hsl",
          inputs: {
            H: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 240,
                },
              },
            },
            S: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
            L: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "rgb",
          inputs: {
            R: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 255,
                },
              },
            },
            G: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 127,
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_size",
          inputs: {
            SIZE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 12,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_font",
          inputs: {
            FONT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "Arial",
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "数学",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: 123,
          },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          inputs: {
            A: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_single",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_trig",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_round",
          fields: {
            OP: "ROUND",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_on_list",
          fields: {
            OP: "SUM",
          },
        },
        {
          kind: "block",
          type: "math_modulo",
          inputs: {
            DIVIDEND: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "block",
          type: "math_atan2",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "テキスト",
      categorystyle: "text_category",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_append",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_length",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_isEmpty",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
            FIND: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_charAt",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_getSubstring",
          inputs: {
            STRING: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_changeCase",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_trim",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_count",
          inputs: {
            SUB: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_replace",
          inputs: {
            FROM: {
              shadow: {
                type: "text",
              },
            },
            TO: {
              shadow: {
                type: "text",
              },
            },
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "text_reverse",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
              },
            },
          },
        },
        {
          kind: "block",
          type: "add_text",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "リスト",
      categorystyle: "list_category",
      contents: [
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getIndex",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_setIndex",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_getSublist",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_split",
          inputs: {
            DELIM: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: ",",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_sort",
        },
        {
          kind: "block",
          type: "lists_reverse",
        },
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "変数",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "関数",
      categorystyle: "procedure_category",
      custom: "PROCEDURE",
    },
  ],
};

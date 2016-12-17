/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.data');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');


Blockly.Blocks['data_variablemenu'] = {
  /**
   * Variable menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_variable",
            "name": "VARIABLE"
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.data.secondary,
        "colourSecondary": Blockly.Colours.data.secondary,
        "colourTertiary": Blockly.Colours.data.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['data_variable'] = {
  /**
   * Block of Variables
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "VARIABLE"
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary,
      "output": "String",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['data_setvariableto'] = {
  /**
   * Block to set variable to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SETPENSIZETO,
      "args0": [
        {
          "type": "input_value",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_changevariableby'] = {
  /**
   * Block to change variable by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_CHANGE_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VARIABLE"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_showvariable'] = {
  /**
   * Block to show a variable
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SHOWVARIABLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VARIABLE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_hidevariable'] = {
  /**
   * Block to hide a variable
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_HIDEVARIABLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VARIABLE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_listcontents'] = {
  /**
   * List reporter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary,
      "output": "String",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['data_listindexall'] = {
  /**
   * List index menu, with all option.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_numberdropdown",
          "name": "INDEX",
          "value": "1",
          "min": 1,
          "precision": 1,
          "options": [
            ["1", "1"],
            ["last", "last"],
            ["all", "all"]
          ]
        }
      ],
      "output": "String",
      "category": Blockly.Categories.data,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['data_listindexrandom'] = {
  /**
   * List index menu, with random option.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_numberdropdown",
          "name": "INDEX",
          "value": "1",
          "min": 1,
          "precision": 1,
          "options": [
            ["1", "1"],
            ["last", "last"],
            ["random", "random"]
          ]
        }
      ],
      "output": "String",
      "category": Blockly.Categories.data,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "colour": Blockly.Colours.textField
    });
  }
};

Blockly.Blocks['data_addtolist'] = {
  /**
   * Block to add item to list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_ADDTO,
      "args0": [
        {
          "type": "input_value",
          "name": "ITEM"
        },
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_deleteoflist'] = {
  /**
   * Block to delete item from list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_DELETE,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_insertatlist'] = {
  /**
   * Block to insert item to list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_INSERT,
      "args0": [
        {
          "type": "input_value",
          "name": "ITEM"
        },
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_replaceitemoflist'] = {
  /**
   * Block to insert item to list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_REPLACEITEMOFWITH,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST"
        },
        {
          "type": "input_value",
          "name": "ITEM"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_itemoflist'] = {
  /**
   * Block for reporting item of list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_ITEMOF,
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "output": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND
    });
  }
};

Blockly.Blocks['data_lengthoflist'] = {
  /**
   * Block for reporting length of list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_LENGTHOF,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "output": "Number",
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND
    });
  }
};

Blockly.Blocks['data_listcontainsitem'] = {
  /**
   * Block to report whether list contains item.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_CONTAINS,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST"
        },
        {
          "type": "input_value",
          "name": "ITEM"
        }
      ],
      "output": "Boolean",
      "outputShape": Blockly.OUTPUT_SHAPE_HEXAGONAL,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_showlist'] = {
  /**
   * Block to show a list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_SHOWLIST,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

Blockly.Blocks['data_hidelist'] = {
  /**
   * Block to hide a list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DATA_HIDELIST,
      "args0": [
        {
          "type": "field_variable",
          "name": "LIST"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.data,
      "colour": Blockly.Colours.data.primary,
      "colourSecondary": Blockly.Colours.data.secondary,
      "colourTertiary": Blockly.Colours.data.tertiary
    });
  }
};

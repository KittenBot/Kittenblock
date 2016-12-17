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

goog.provide('Blockly.Blocks.looks');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');


Blockly.Blocks['looks_sayforsecs'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAYFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_say'] = {
  /**
   * Block to say.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAY,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_thinkforsecs'] = {
  /**
   * Block to think for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINKFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_think'] = {
  /**
   * Block to think.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINK,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_show'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.LOOKS_SHOW,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        "colour": Blockly.Colours.looks.primary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary
      });
  }
};

Blockly.Blocks['looks_hide'] = {
  /**
   * Hide block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.LOOKS_HIDE,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        "colour": Blockly.Colours.looks.primary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary
      });
  }
};

Blockly.Blocks['looks_effectmenu'] = {
  /**
   * Graphic effects drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "EFFECT",
            "options": [
              ['color', 'COLOR'],
              ['fisheye', 'FISHEYE'],
              ['whirl', 'WHIRL'],
              ['pixelate', 'PIXELATE'],
              ['mosaic', 'MOSAIC'],
              ['brightness', 'BRIGHTNESS'],
              ['ghost', 'GHOST']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.looks.secondary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['looks_changeeffectby'] = {
  /**
   * Block to change graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "input_value",
          "name": "EFFECT"
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_seteffectto'] = {
  /**
   * Block to set graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETEFFECT,
      "args0": [
        {
          "type": "input_value",
          "name": "EFFECT"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_cleargraphiceffects'] = {
  /**
   * Block to clear graphic effects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_changesizeby'] = {
  /**
   * Block to change size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESIZEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_setsizeto'] = {
  /**
   * Block to set size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSIZETO,
      "args0": [
        {
          "type": "input_value",
          "name": "SIZE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_size'] = {
  /**
   * Block to report size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SIZE,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['looks_costume'] = {
  /**
   * Costumes drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "COSTUME",
            "options": [
              ['costume1', 'COSTUME1'],
              ['costume2', 'COSTUME2']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.looks.secondary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['looks_switchcostumeto'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHCOSTUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "COSTUME"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_nextcostume'] = {
  /**
   * Block to switch the sprite's costume to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.LOOKS_NEXTCOSTUME,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        "colour": Blockly.Colours.looks.primary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary
      });
  }
};

Blockly.Blocks['looks_switchbackdropto'] = {
  /**
   * Block to switch the backdrop to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROP,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_backdrops'] = {
  /**
   * Backdrop list
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "looks_backdrops",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
              ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND
    });
  }
};

Blockly.Blocks['looks_gotofront'] = {
  /**
   * "Go to front" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.LOOKS_GOTOFRONT,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        "colour": Blockly.Colours.looks.primary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary
      });
  }
};

Blockly.Blocks['looks_gobacklayers'] = {
  /**
   * "Go back [Number] Layers" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOBACKLAYERS,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_backdropname'] = {
  /**
   * Block to report backdrop's name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_BACKDROPNAME,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['looks_costumeorder'] = {
  /**
   * Block to report costume's order
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_COSTUME,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['looks_backdroporder'] = {
  /**
   * Block to report backdrop's order
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_BACKDROPORDER,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['looks_switchbackdroptoandwait'] = {
  /**
   * Block to switch the backdrop to the selected one and wait.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};

Blockly.Blocks['looks_nextbackdrop'] = {
  /**
   * Block to switch the backdrop to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.LOOKS_NEXTBACKDROP,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        "colour": Blockly.Colours.looks.primary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary
      });
  }
};

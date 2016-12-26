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

goog.provide('Blockly.Blocks.sound');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');


Blockly.Blocks['sound_sounds_option'] = {
  /**
   * Sound effects drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SOUND_MENU",
            "options": [
              ['meow', '0'],
              ['boing', '1'],
              ['cave', '2'],
              ['drip drop', '3'],
              ['drum machine', '4'],
              ['eggs', '5'],
              ['zoop', '6']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_play'] = {
  /**
   * Block to play sound.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAY,
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_playuntildone'] = {
  /**
   * Block to play sound until done.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYUTILDONE,
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_playwithpitch'] = {
  /**
   * Block to play sound with pitch shift.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYWITHPITCH,
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_NUM"
        },
        {
          "type": "input_value",
          "name": "PITCH"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_stopallsounds'] = {
  /**
   * Block to stop all sounds
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_STOPALLSOUND,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_beats_menu'] = {
  /**
   * Sound beats drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "BEATS",
            "options": [
              ['1/8', '0.125'],
              ['1/4', '0.25'],
              ['1/2', '0.5'],
              ['1', '1'],
              ['2', '2'],
              ['4', '4']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_playdrum'] = {
  /**
   * Block to play a certain drum
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYDRUM,
      "args0": [
        {
          "type": "input_value",
          "name": "DRUMTYPE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};


Blockly.Blocks['sound_playdrumforbeats'] = {
  /**
   * Block to play a certain drum for certain beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYDRUMFORBEATS,
      "args0": [
        {
          "type": "input_value",
          "name": "DRUMTYPE"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_restforbeats'] = {
  /**
   * Block to rest for certain beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_RESTFORBEATS,
      "args0": [
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_playnote'] = {
  /**
   * Block to play a certain note for certain beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYNOTE,
      "args0": [
        {
          "type": "input_value",
          "name": "NOTE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};


Blockly.Blocks['sound_playnoteforbeats'] = {
  /**
   * Block to play a certain note for certain beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_PLAYNOTEFORBEATS,
      "args0": [
        {
          "type": "input_value",
          "name": "NOTE"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_scales_menu'] = {
  /**
   * Sound scales drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SCALE",
            "options": [
              ['major', 'MAJOR'],
              ['minor', 'MINOR'],
              ['pentatonic', 'PENTATONIC'],
              ['chromatic', 'CHROMATIC']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_roots_menu'] = {
  /**
   * Sound roots drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "ROOT",
            "options": [
              ['C', '0'],
              ['C#', '1'],
              ['D', '2'],
              ['D#', '3'],
              ['E', '4'],
              ['F', '5'],
              ['F#', '6'],
              ['G', '7'],
              ['G#', '8'],
              ['A', '9'],
              ['A#', '10'],
              ['B', '11']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_setkey'] = {
  /**
   * Block to set the musical key and scale for the play note block
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETKEY,
      "args0": [
        {
          "type": "input_value",
          "name": "ROOT"
        },
        {
          "type": "input_value",
          "name": "SCALE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_effects_menu'] = {
  /**
   * Sound effects drop-down menu.
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
              ['echo', 'ECHO'],
              ['pan left/right', 'PAN'],
              ['reverb', 'REVERB'],
              ['pitch', 'PITCH']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_seteffectto'] = {
  /**
   * Block to set the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETEFFECTTO,
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
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};


Blockly.Blocks['sound_changeeffectby'] = {
  /**
   * Block to change the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CHANGEEFFECTBY,
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
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_cleareffects'] = {
  /**
   * Block to clear audio effects
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CLEAREFFECTS,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_setinstrumentto'] = {
  /**
   * Block to set the sprite's instrument to a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETINSTRUMENTTO,
      "args0": [
        {
          "type": "input_value",
          "name": "INSTRUMENT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_changevolumeby'] = {
  /**
   * Block to change the sprite's volume by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CHANGEVOLUMEBY ,
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_setvolumeto'] = {
  /**
   * Block to set the sprite's volume to a certain percent
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETVOLUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_volume'] = {
  /**
   * Block to report volume
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_VOLUME,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['sound_changetempoby'] = {
  /**
   * Block to change the sprite's tempo by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CHANGETEMPOBY,
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_settempotobpm'] = {
  /**
   * Block to set the sprite's volume to a certain bpm
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETTEMPOTOBPM,
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};

Blockly.Blocks['sound_tempo'] = {
  /**
   * Block to report tempo
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_TEMPO,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary,
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

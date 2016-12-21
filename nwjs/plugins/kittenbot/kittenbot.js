/**
 * Created by Riven on 2016/12/17.
 */

var KittenBot = function (runtime) {
    this.runtime = runtime
    this.color = {
        "primary": "#4a7d9b",
        "secondary": "#b7cbd7",
        "tertiary": "#e3e3e3"
    };

};

KittenBot.prototype.getBlocks = function () {
    var color = this.color;
    return {
        'rosbot_stepperspeed': {
            /**
             * Block to turn
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "id": "rosbot_stepperspeed",
                    "message0": "stepper speed L %1 R %2",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "SPEEDL"
                        },
                        {
                            "type": "input_value",
                            "name": "SPEEDR"
                        },
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },

    };
};

KittenBot.prototype.getPrimitives = function() {
    return {
        'rosbot_stepperspeed': this.stepperspeed,
    };
};

KittenBot.prototype.stepperspeed = function(argValues, util) {
    var spdl = argValues.SPEEDL;
    var spdr = argValues.SPEEDR;
    var cmd = "M200 L"+spdl+" R"+spdr;
    util.ioQuery('serial', 'sendMsg', cmd);
};

KittenBot.prototype.getToolbox = function () {
    return '<category name="Rosbot" colour="#FF6680" secondaryColour="#FF3355">' +
        '<block type="rosbot_stepperspeed">' +
        '<value name="SPEEDL">' +
        '<shadow type="math_number">' +
        '<field name="NUM">200</field>' +
        '</shadow>' +
        '</value>' +
        '<value name="SPEEDR">' +
        '<shadow type="math_number">' +
        '<field name="NUM">200</field>' +
        '</shadow>' +
        '</value>' +
        '</block>' +
        '</category>';
}


module.exports = KittenBot;

/**
 * Created by Riven on 2016/12/17.
 */

var Mcookie = function (runtime) {
    this.runtime = runtime
    this.color = {
        "primary": "#4a7d9b",
        "secondary": "#b7cbd7",
        "tertiary": "#e3e3e3"
    };
    this.firmware = "./mcookie/mcookie.ino"

};

Mcookie.prototype.getBlocks = function () {
    var color = this.color;
    var OUTPUT_SHAPE_ROUND = 2;

    return {
        'mcookie_port_option': {
            init: function() {
                this.jsonInit({
                    "id": "mcookie_port_option",
                    "message0": "%1",
                    "args0": [
                        {
                            "type": "field_dropdown",
                            "name": "MCOOKIE_PORT_OPTION",
                            "options": [
                                ['0/1', '0'],
                                ['2/3', '1'],
                                ['4/5', '2'],
                                ['6/7', '3'],
                                ['8/9', '4'],
                                ['10/11', '5'],
                                ['12/13', '6'],
                                ['A0/A1', '7'],
                                ['A2/A3', '8'],
                                ['A6/A7', '9']
                            ]
                        }
                    ],
                    "inputsInline": true,
                    "output": "String",
                    "colour": color.secondary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        "mcookie_level_option":{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_level_option",
                    "message0": "%1",
                    "args0": [
                        {
                            "type": "field_dropdown",
                            "name": "MCOOKIE_LEVEL_OPTION",
                            "options": [
                                ['high', '1'],
                                ['low', '0']
                            ]
                        }
                    ],
                    "inputsInline": true,
                    "output": "String",
                    "colour": color.secondary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_led':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_led",
                    "message0": "LED %1 %2",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        },
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_LEVEL_OPTION"
                        }
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
        'mcookie_button':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_button",
                    "message0": "BUTTON %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_crash':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_crash",
                    "message0": "CRASH %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_tone':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_tone",
                    "message0": "BUZZER %1 %2hz %3ms",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        },
                        {
                            "type": "input_value",
                            "name": "FREQUENCY"
                        },
                        {
                            "type": "input_value",
                            "name": "DURATION"
                        }
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
        'mcookie_gesture':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_gesture",
                    "message0": "GESTURE %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_rgb':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_rgb",
                    "message0": "COLORLED %1 color %2",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        },
                        {
                            "type": "input_value",
                            "name": "COLOR"
                        }
                    ],
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'mcookie_lumin':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_lumin",
                    "message0": "LIGHT-AI %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
        'mcookie_mic':{
            init: function() {
                this.jsonInit({
                    "id": "mcookie_mic",
                    "message0": "MIC %1 ",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "MCOOKIE_PORT_OPTION"
                        }
                    ],
                    "inputsInline": true,
                    "output": "Number",
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary,
                    "outputShape": 2
                });
            }
        },
    };
};

Mcookie.prototype.getPrimitives = function() {
    return {
        'mcookie_led': this.mcookie_led,
        'mcookie_button': this.mcookie_button,
        'mcookie_crash': this.mcookie_crash,
        'mcookie_tone': this.mcookie_tone

    };
};

Mcookie.prototype.mcookie_led = function(argValues, util) {
    var level = argValues.MCOOKIE_LEVEL_OPTION;
    var port = argValues.MCOOKIE_PORT_OPTION;
    var cmd = "0 "+port+" "+level;
    util.ioQuery('serial', 'sendMsg', cmd);
};

Mcookie.prototype.mcookie_button = function (argValues, util) {
    var port = argValues.MCOOKIE_PORT_OPTION;
    var cmd = "1 " + port;
    var exePromise = new Promise(function (resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot": "BTN_" + port, "resolve": resolve});
    });
    return exePromise;
}

Mcookie.prototype.mcookie_crash = function (argValues, util) {
    var port = argValues.MCOOKIE_PORT_OPTION;
    var cmd = "2 " + port;
    var exePromise = new Promise(function (resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot": "CRASH_" + port, "resolve": resolve});
    });
    return exePromise;
}

Mcookie.prototype.mcookie_tone = function(argValues, util) {
    var port = argValues.MCOOKIE_PORT_OPTION;
    var freq = argValues.FREQUENCY;
    var dur = argValues.DURATION;
    var cmd = "3 "+port+" "+freq+" "+dur;
    util.ioQuery('serial', 'sendMsg', cmd);
};


Mcookie.prototype.getToolbox = function () {
    return '<category name="mCookie" colour="#bcee3b" secondaryColour="#b4ec24">'+
        '<block type="mcookie_led">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '<value name="MCOOKIE_LEVEL_OPTION">'+
        '<shadow type="mcookie_level_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_button">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_crash">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_tone">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '<value name="FREQUENCY">'+
        '<shadow type="math_number">'+
        '<field name="NUM">200</field>'+
        '</shadow>'+
        '</value>'+
        '<value name="DURATION">'+
        '<shadow type="math_number">'+
        '<field name="NUM">500</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_rgb">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '<value name="COLOR">'+
        '<shadow type="colour_picker">'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_gesture">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_lumin">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '<block type="mcookie_mic">'+
        '<value name="MCOOKIE_PORT_OPTION">'+
        '<shadow type="mcookie_port_option"></shadow>'+
        '</value>'+
        '</block>'+
        '</category>';
}


module.exports = Mcookie;

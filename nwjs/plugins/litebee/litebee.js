/**
 * Created by Riven on 2016/12/24.
 */


var Litebee = function (runtime) {
    this.runtime = runtime
    this.color = {
        "primary": "#FF6680",
        "secondary": "#FF4D6A",
        "tertiary": "#FF3355"
    };

};

Litebee.prototype.onRecv = function (data) {
    //console.log("buf "+data.byteLength+">>"+data);

}

Litebee.prototype.getBlocks = function () {
    var color = this.color;
    return {
        'litebee_calibrate': {
            init: function() {
                this.jsonInit({
                    "id": "litebee_calibrate",
                    "message0": "校准",
                    "args0": [
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
        "litebee_led":{
            init: function() {
                this.jsonInit({
                    "id": "litebee_led",
                    "message0": "让 %1 LED %2",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "LITEBEE_LED_OPTION"
                        },
                        {
                            "type": "input_value",
                            "name": "LITEBEE_ONOFF_OPTION"
                        },
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary":color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'litebee_led_option':{
            /**
             * kittenbot_direction_menu
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit(
                    {
                        "message0": "%1",
                        "args0": [
                            {
                                "type": "field_dropdown",
                                "name": "LITEBEE_LED_OPTION",
                                "options": [
                                    ['所有', 'ALL'],
                                    ['A', 'A'],
                                    ['B', 'B'],
                                    ['C', 'C'],
                                    ['D', 'D']
                                ]
                            }
                        ],
                        "inputsInline": true,
                        "output": "String",
                        "colour": color.secondary,
                        "colourSecondary": color.secondary,
                        "colourTertiary": color.tertiary
                    });
            }
        },
        'litebee_onoff_option':{
            /**
             * kittenbot_direction_menu
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit(
                    {
                        "message0": "%1",
                        "args0": [
                            {
                                "type": "field_dropdown",
                                "name": "LITEBEE_ONOFF_OPTION",
                                "options": [
                                    ['On', 'ON'],
                                    ['Off', 'OFF']
                                ]
                            }
                        ],
                        "inputsInline": true,
                        "output": "String",
                        "colour": color.secondary,
                        "colourSecondary": color.secondary,
                        "colourTertiary": color.tertiary
                    });
            }
        },

    }
}

Litebee.prototype.getPrimitives = function() {
    return {
        'litebee_calibrate':this.litebee_calibrate,
        'litebee_led':this.litebee_led
    };
};

var lbSpeed=[0,0,0,0];
var lbFourLed = 0;
var lbColorLed = 0;
var lbBeep = 0;
function litebeeBuildCmd(msgCmd,speed,fourLed,colorLed,beep) {
    var checkSum = 0;
    if(speed[0] > 240){
        speed[0] = 240;
    }
    if(speed[1] > 240){
        speed[1] = 240;
    }
    if(speed[2] > 240){
        speed[2] = 240;
    }
    if(speed[3] > 200){
        speed[3] = 200;
    }
    if(speed[0] < 0){
        speed[0] = 0;
    }
    if(speed[1] < 0){
        speed[1] = 0;
    }
    if(speed[2] < 0){
        speed[2] = 0;
    }
    if(speed[3] < 0){
        speed[3] = 0;
    }
    checkSum ^= msgCmd;
    checkSum ^= speed[0];
    checkSum ^= speed[1];
    checkSum ^= speed[2];
    checkSum ^= speed[3];
    checkSum ^= fourLed;
    checkSum ^= colorLed;
    checkSum ^= beep;
    console.log("msgCmd:"+msgCmd+"  speed0:"+speed[0]+"  speed1:"+speed[1]+"  speed2:"+speed[2]+"  speed3:"+speed[3]+"  fourLed:"+fourLed+"  checksum:"+checkSum);
    var msg = new Uint8Array([0x24,0x4d,0x3c,msgCmd,speed[0],speed[1],speed[2],speed[3],fourLed,colorLed,beep,checkSum]);
    return msg;
}

Litebee.prototype.litebee_calibrate = function (argValues, util) {
    var cmd = litebeeBuildCmd(5,lbSpeed,lbFourLed,lbColorLed,lbBeep);
    util.ioQuery('serial', 'sendMsg', cmd);
}

Litebee.prototype.litebee_led = function (argValues, util) {
    var led = argValues.LITEBEE_LED_OPTION;
    var onoff = argValues.LITEBEE_ONOFF_OPTION;
    if(led=="ALL"){
        if(onoff=="ON"){
            lbFourLed = 15;
        }else{
            lbFourLed &= 0;
        }
    }else if(led=='A'){
        if(onoff=="ON"){
            lbFourLed |= 1;
        }else{
            lbFourLed &= ~(1);
        }
    }else if(led=='B'){
        if(onoff=="ON"){
            lbFourLed |= 2;
        }else{
            lbFourLed &= ~(2);
        }
    }else if(led=='C'){
        if(onoff=="ON"){
            lbFourLed |= 4;
        }else{
            lbFourLed &= ~(4);
        }
    }else if(led=='D'){
        if(onoff=="ON"){
            lbFourLed |= 8;
        }else{
            lbFourLed &= ~(8);
        }
    }
    var cmd = litebeeBuildCmd(6,lbSpeed,lbFourLed,lbColorLed,lbBeep);
    util.ioQuery('serial', 'sendMsg', cmd);
}



Litebee.prototype.getToolbox = function () {
    return '<category name="Litebee" colour="#FF6680" secondaryColour="#FF3355">'+
        '<block type="litebee_calibrate">'+
        '</block>'+
        '<block type="litebee_led">'+
        '<value name="LITEBEE_LED_OPTION">'+
        '<shadow type="litebee_led_option"></shadow>'+
        '</value>'+
        '<value name="LITEBEE_ONOFF_OPTION">'+
        '<shadow type="litebee_onoff_option"></shadow>'+
        '</value>'+
        '</block>'+
        '</category>';
}






module.exports = Litebee;

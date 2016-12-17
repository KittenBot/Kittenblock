/**
 * Created by Riven on 7/8/2016.
 */

function ArduinoBlocks(runtime) {
    /**
     * The runtime instantiating this block package.
     * @type {Runtime}
     */
    this.runtime = runtime;
}


/**
 * Retrieve the block primitives implemented by this package.
 * @return {Object.<string, Function>} Mapping of opcode to Function.
 */
ArduinoBlocks.prototype.getPrimitives = function() {
    return {
        'event_arduinobegin': this.arduinobegin,
        'arduino_pin_mode': this.pinMode,
        'arduino_analog_read': this.analogRead,
        'arduino_pin_mode_option': this.pinModeOption,
        'arduino_digital_write': this.digitalWrite,
        'arduino_level_option': this.levelOption,
        'arduino_pwm_write': this.pwmWrite,
        'arduino_pwm_option': this.pwmOption,
        'arduino_digital_read': this.digitalRead,
        'arduino_analog_in_option': this.analogPinOption,
        'arduino_tone': this.tone,
        'arduino_map': this.map,
        'arduino_servo': this.servo,
        'arduino_pulsein': this.pulsein
    };
};

ArduinoBlocks.prototype.getHats = function () {
    return {
        event_whenarduinobegin: {
            restartExistingThreads: true
        }
    };
};

ArduinoBlocks.prototype.arduinobegin = function(argValues, util){
    console.log("restart arduino programe");
    cmd = "M999";
    util.ioQuery('serial', 'sendMsg', cmd);
};

ArduinoBlocks.prototype.pinMode = function(argValues, util) {
    var pinmode = {"INPUT":0,"OUTPUT":1};
    pin = argValues.PINNUM;
    mode = pinmode[argValues.ARDUINO_PIN_MODE_OPTION];
    cmd = "M1 "+pin+" "+mode;
    util.ioQuery('serial', 'sendMsg', cmd);
};

ArduinoBlocks.prototype.digitalWrite = function(argValues, util) {
    var level = {"HIGH":1,"LOW":0};
    pin = argValues.PINNUM;
    value = level[argValues.ARDUINO_LEVEL_OPTION];
    cmd = "M2 "+pin+" "+value;
    util.ioQuery('serial', 'sendMsg', cmd);
};

ArduinoBlocks.prototype.pwmWrite = function(argValues, util) {
    pin = argValues.ARDUINO_PWM_OPTION;
    value = argValues.PWM;
    cmd = "M4 "+pin+" "+value;
    util.ioQuery('serial', 'sendMsg', cmd);
};

ArduinoBlocks.prototype.digitalRead = function(argValues, util) {
    var pin = argValues.PINNUM;
    var data = {type:'D',pin:pin};
    return util.ioQuery('serial', 'queryData', data);
};

ArduinoBlocks.prototype.analogRead = function(argValues, util) {
    var pin = argValues.PINNUM;
    var data = {type:'A',pin:pin};
    return util.ioQuery('serial', 'queryData', data);
};


ArduinoBlocks.prototype.tone = function(argValues, util){
    pin = argValues.PINNUM;
    var cmd = "M6 "+pin+" "+argValues.FREQUENCY+" "+argValues.DURATION;
    util.ioQuery('serial', 'sendMsg', cmd);
};

ArduinoBlocks.prototype.servo = function(argValues, util){
    pin = argValues.PINNUM;
    var cmd = "M7 "+pin+" "+argValues.ANGLE;
    util.ioQuery('serial', 'sendMsg', cmd);
};

ArduinoBlocks.prototype.pulsein = function(argValues, util) {
    var cmd = "M8 "+argValues.PINNUM;
    var exePromise = new Promise(function(resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot":"M8", "resolve":resolve});
    });
    return exePromise;
};


ArduinoBlocks.prototype.map = function(argValues, util){
    x = argValues.VAL;
    in_min = argValues.FROMLOW;
    in_max = argValues.FROMHIGH;
    out_min = argValues.TOLOW;
    out_max = argValues.TOHIGH;
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

ArduinoBlocks.prototype.pinModeOption = function(argValues, util) {
    return argValues.ARDUINO_PIN_MODE_OPTION;
};

ArduinoBlocks.prototype.levelOption = function(argValues, util) {
    return argValues.ARDUINO_LEVEL_OPTION;
};

ArduinoBlocks.prototype.pwmOption = function(argValues, util) {
    return argValues.ARDUINO_PWM_OPTION;
};

ArduinoBlocks.prototype.analogPinOption = function(argValues, util) {
    return argValues.ARDUINO_ANALOG_IN_OPTION;
};

module.exports = ArduinoBlocks;

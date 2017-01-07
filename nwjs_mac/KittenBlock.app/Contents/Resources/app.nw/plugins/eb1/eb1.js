/**
 * Created by Riven on 2016/12/17.
 */

var EB1 = function (runtime) {
    this.runtime = runtime
    this.color = {
        "primary": "#FF6680",
        "secondary": "#FF4D6A",
        "tertiary": "#FF3355"
    };
    this.boards = [{'name':'EB1','type':'SamuraiCircuits:avr:eb1'}],
    this.uploadPort = null; // use usb defined in platform
};

EB1.prototype.getPrimitives = function() {
    return {
    };
};


module.exports = EB1;

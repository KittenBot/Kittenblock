/**
 * Created by Riven on 2016/10/3.
 */

function Serial (runtime) {

    /**
     * Reference to the owning Runtime.
     * Can be used, for example, to activate hats.
     * @type{!Runtime}
     */
    this.runtime = runtime;
    // call back for send msg
    this.sendMsg = null;
    this.sendBuff = null;
    // call back for data query
    this.query = null;
    // promise cb for each command
    this._resolves = {};
}

Serial.prototype.postData = function (data) {
    var slot = data.slot;
    var report = data.report;
    if(slot in this._resolves){
        if(report!=null){
            this._resolves[slot](report);
        }else{
            this._resolves[slot]();
        }
    }

};

Serial.prototype.sendBuff = function(data){
    if(this.sendBuff){
        this.sendBuff(data);
    }
};

Serial.prototype.sendMsg = function(data){
    if(this.sendMsg){
        this.sendMsg(data);
    }
};

Serial.prototype.queryData = function(data){
    if(this.query){
        return this.query(data);
    }
    return null;
};

Serial.prototype.regSendMsg = function(cb){
    this.sendMsg = cb;
};

Serial.prototype.regQueryData = function(cb){
    this.query = cb;
};

Serial.prototype.regResolve = function(data){
    var slot = data["slot"];
    var cb = data["resolve"];
    this._resolves[slot] = cb;
};


module.exports = Serial;

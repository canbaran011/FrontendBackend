

const EventEmiter = require('events');
const emitter = new EventEmiter();

class Logger extends EventEmiter{ 
    log(message){
        console.log(message);
    
        this.emit('connection',{id:1,message:'hello'});
    }
}




module.exports = Logger;



























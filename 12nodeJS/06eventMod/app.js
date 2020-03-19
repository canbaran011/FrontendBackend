const Logger = require('./logger');
const logger = new Logger();
// listener kayıt

logger.on('connection',function(args){
console.log('bağlantı kuruldu',args);


});
logger.log('Can Baran Loginned.')

// emitter.on('logout',function(){
//     console.log('bağlantı sonlandırıldı');
// })


// event i tetikle

// emitter.emit('connection',{id:01,message:'hello'});
// emitter.emit('logout');












































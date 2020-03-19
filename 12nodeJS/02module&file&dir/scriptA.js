// BROWSER

// // IIFE
// var controllerA =(function(){
//     //private
//     //scope A
//     var age= 20;
//     var firstName='CanBaran';
//     var log = function(){
//         console.log(this.firstName);
//     }
//     //public
//     return {
//         firstName,
//         log
//     }
// })();



// var firstName = 'CanBaran';
//ikisindede aynı değişken varsa eğer ozaman son script.js deki yazılır ekrana 


// NODE JS 

// console.log(module);// module içindeki exports içine almamız gerekiyor. tanımlamamız gereken şeyleri

//private members
var age = 30;


// public members
console.log(__filename);
console.log(__dirname);

var firstName = 'CanBaran';

var log = function(name){
    console.log(name);
}

// module.exports.name = firstName;
// module.exports.log = log;

module.exports ={
    name : firstName,
    log
    // firstName,
    // log
}






































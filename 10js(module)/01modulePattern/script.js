
// 1) Global variable naming conflicts
// //Script.js
// var name = 'Can';



// //App.js
// var name = 'Baran';

// console.log(name);


// 2) ENcapsulation
// var Counter ={
//     number :0,
//     increment : function(){
//         return ++this.number;
//     },
//     decrement : function(){
//     return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());

// IIFE : Immadiately Invoked Function Expressions


//script.js
// (function(){

//     var name = 'CanBaran';
//     console.log(name);

// })();

// //app.js
// (function(){

//     var name = 'Ronald';
//     console.log(name);

// })();


//module üzerinden erişmek için
// var Module =(function(){

//     //private members
//     let number = 0;

//     let increment = function(){
//         return ++number;
//     }
//     // console.log(increment());
//     // console.log(increment());
//     let decrement = function(){
//         return --number;
//     }
// return{
//     //public members
//     increment,
//     decrement
// }

// })();
// // console.log(number);
// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());

var Module = (function(){

    var privateMethod = function(){

    };
    return{
        publicMethod =function(){

        }
    }

})();
Module.privateMethod();





























































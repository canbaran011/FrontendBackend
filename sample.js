
console.log("hello");
// // let can = {
// //   name : 11,
// //   surname : 'gndz',
// //   job :'software'
// // }

// // console.log(can.name);
// // console.log(typeof can.name);

// let Person = function (name, surname, year) {
//   (this.name = name),
//     (this.surname = surname),
//     (this.calculateAge = function () {
//       return 2022 - year;
//     });
// };
// let can = new Person("can", "baran", 1995);

// //console.log(can.calculateAge());

// var calculate = function(x){
//   let weight =  50 * x;
//   console.log(weight);
// }
// calculate(25);

// function order(y){
//   console.log("order is ready");
// }
// order(5)

// var user = {
//   name : "can baran"
// }
// try{
//   console.log(myFUNC())
// }catch(e){
//   throw new Error("user has no mail")
// }

// let wel5 = function(){
// console.log("this is ES5 func")
// }
// wel5()

// let wel6 =()=>{
//   console.log("this is ES6 func")
// }
// wel6()

// let multiply= (x,y)=>{
//   return x * y;
// }
// let d =multiply(6,6)
// console.log(d+ " sonucudur")

// const arr = [1, 2, 3, 6, 10, 30, 50, 55, 61, 79];
// // ES 6
// let evenES6 = arr.filter(a => a % 2 == 0);
// console.log(evenES6);

// function Game(){
//   this.live =0,
//   this.addLive = function(){
//     var self = this;
//     this.OneUp = setInterval(()=>{
//       console.log(++self.live);
//     },1000);
//   };
// }

// let player = new Game();
// //player.addLive();

// let numbers = [10,20,30];
// console.log(numbers)

// let arr1 = ["2","3","4"];
// let arr2 = ["5","6","7"];

// arr1.push(...arr2);
// console.log(arr1)

// // Maps key / value pairs
// let val;
// const n = new Map();
// n.set(1,1)
// n.set(2,11)
// n.set(3,1)
// n.set(1,12)

// val= n.size;
//  console.log(val)

// // for(var [key,value] of n){
// // console.log(key + " " + value)  
// // }

// var first = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"]
// ]);

// var second = new Map([
//   [4, "four"],
//   [5, "five"]
// ]);

// let merged = new Map([...first,...second])
// merged.forEach((a)=>{
//   console.log(a)
// })
// console.log(merged)

// let val;
// var mySet = new Set();
// mySet.add(1);
// mySet.add(2);

// mySet.add(2); //iki varken iki atayamadık
// mySet.add("ikikik");
// mySet.add({ a: 1, b: 2 });

// for(var item of mySet){
//   console.log(item)
// }

// CLASS
//es5
//  let Bird = function(name,surname){
//    this.name = name,
//    this.surname = surname,
//    this.calculateAge = ()=>{
//      console.log("you are 27")
//    }
//  }

//  let one = new Bird("can","baran")
//  console.log(one.surname);

// //es6
// class Drum{
//   constructor(name, surname, year){
//     this.name = name;
//     this.surname = surname;
//     this.year = year;
//   }
//   calculateAge(){
//     return 2022 - this.year;
//   }
//   static distance(a,b){
//     return 2000 - a - b;
//   }
// }

// let o = new Drum("cbg","gndz",27);
// console.log(Drum.distance(10,2));

// SUB CLASSES
// class Person{
//   constructor(first, last){
//     this.first = first;
//     this.last = last;
//   }
//   sayHello(){
//     return "Hello Bruder ! "
//   }
// }

// class Customer extends Person {
//   constructor(first, last , phone , user){
//     super(first, last);
//     this.phone = phone;
//     this.user = user;
//   }
//   static getTotal(){
//     return 1000;
//   }
// }
// let other = new Customer("cbg","cbg","cbg","cbg",)
// console.log(other.sayHello())
// console.log(other.first)
// console.log(Customer.getTotal())

// async - await
/* 
1 callback
2 promise
3 async await

*/

// const isMomHappy = false;
// const willGetPhone = new Promise((resolve,reject)=>{
//   if(isMomHappy){
//     const phone = {
//       name : "Samsung",
//       price: "8699"
//     }
//     resolve(phone)
//   }else{
//     const error = new wError("mom is sad");
//     reject(error);
//   }
// })


// const askMom = function(){
//   willGetPhone
//   .then((message)=>{
//   console.log("first block")
//         }).catch(err =>{
//           console.log("errorrrr")
//         })
// }

// askMom();

/////////////////////////////
var isError = false;
 
function getCategory(){
return new Promise((resolve,reject) => {
    setTimeout(() => {

if(!isError){
    resolve('phone'); 

}else{
    reject('Error');
}
    }, 1000);
    
});
}
function getProducts(category){

return new Promise(resolve=>{
    setTimeout(() => {
        resolve(`5 products in ${category}`);
    }, 1000);
});
}

async function getProduct(){
try{
    let category= await getCategory();
    let result = await getProducts(category);
    console.log(result);

}
catch(error){
console.log(error);
}
}

getProduct();




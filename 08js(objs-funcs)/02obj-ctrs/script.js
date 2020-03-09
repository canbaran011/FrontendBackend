// object literals

// let can ={
//     name:'can',
//     yearOfBirth:1995,
//     job:'none'
// } //kalıp oluşturmamız lazım
// console.log(can);

// function Person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job =job;
//     this.calculateAge = function(){
//         return 2020 - this.yearOfBirth;
//     }
// // console.log(this);
// }

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    return 2020 - this.yearOfBirth;
  };
};

let can = new Person("can", 1990, "student");
let jon = new Person("jon", 1995, "ex-student");

console.log(can.name);
console.log(can.job);
console.log(can.calculateAge());

console.log("*******************************");

console.log(jon.name);
console.log(jon.job);
console.log(jon.calculateAge());

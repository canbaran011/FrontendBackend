//Prototypal based Inheritance

//Person Obj
let Person = function(name,yearOfBirth,job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}
Person.prototype.calculatAge = function(){
    return 2020 - this.yearOfBirth;
}
//Teacher Obj
let Teacher = function(name,yearOfBirth,job,subject){

    Person.call(this,name,yearOfBirth,job);
    this.subject = subject;
} 
//Inherit the Person proto Methods !IMPORTANT
Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype.constructor);

//set Teacher constructor
Teacher.prototype.constructor = Teacher; 

let can = new Teacher('can',1995,'none','math');
let ronald = new Person('ronald',1990,'seherbaz');
console.log(ronald); console.log(ronald.calculatAge());
console.log(can);
console.log(can.calculatAge());




























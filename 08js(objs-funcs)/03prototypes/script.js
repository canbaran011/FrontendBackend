// PROTOTYPE
//kalıtım prototype ile yapılır.
let Person = function(name,yearOfBirth,job){
  this.name =name;
  this.yearOfBirth = yearOfBirth;
  this.job =job;
  
}
Person.prototype.calculateAge =function(){
  return 2020 - this.yearOfBirth;
}
Person.prototype.getName = function(){
  return this.name;
}
Person.prototype.lastName= 'GNDZ';

let can = new Person('can',1995,'teacher');
let ron = new Person('ron',1990,'actor');

console.log(can.calculateAge());
console.log(can);
console.log(can.getName());
console.log('***********************************');

console.log(ron.calculateAge());
console.log(ron);

//önemli !
//proto persona(can,ron) ait olmayanlar //inherited parça
console.log(ron.hasOwnProperty('name'));
console.log(ron.hasOwnProperty('lastName'));




















































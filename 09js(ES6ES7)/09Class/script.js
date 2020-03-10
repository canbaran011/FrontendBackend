// Classes

// ES 5
var PersonES5 = function(name, job, yearOfBirth) {
  this.name = name;
  this.job = job;
  this.yearOfBirth = yearOfBirth;
};
PersonES5.prototype.calculateAge = function() {
  return 2020 - this.yearOfBirth;
};
var can = new PersonES5("can", "none", 1995);

console.log(can.calculateAge());
console.log(can);

console.log("+++++++++++++++ ES6 ++++++++++++++++++++++");
// ES 6
class PersonES6 {
  constructor(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
  }
  calculateAge() {
    return 2020 - this.yearOfBirth;
  }
}
let ron = new PersonES6("can", "none", 1990);
console.log(ron.calculateAge());
console.log(ron);

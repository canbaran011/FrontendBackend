//obj create
let personProto={
  calculateAge : function(){
    return 2018- this.yearOfBirth;
  }
}

let can = Object.create(personProto);

can.name =' canbaran ';
can.yearOfBirth=1995;
can.job='none';

let ron = Object.create(personProto,{
  name: {value: 'ron'},
  yearOfBirth : {value: 1989},
  job: {value: 'teacher'}
});

console.log(ron);
console.log(ron.calculateAge());

console.log(personProto);
console.log(can);
console.log(can.calculateAge());






































let Employee = function(name,salary){
  if(!this instanceof Employee){
    return new Employee(name,salary);
  }
  this.name =name,
  this.salary=salary
    
}
Employee.prototype.calculateSalary = function(){
  var month = new Date().getMonth()+1;
  var tax =0;
  total = this.salary*month;
  if(total <= 20000){
    tax = total * 0.2;

  }else if(total <= 30000){
    tax = total*0.25;
  }else{
    tax = total*0.27;
  }

return{
  tax:tax,
  paid: total -tax
}
}




var emp = new Employee('can',3000);
console.log(emp);
console.log(emp.calculateSalary());


// // PROTOTYPE
// //kalıtım prototype ile yapılır.
// let Person = function(name,yearOfBirth,job){
//   this.name =name;
//   this.yearOfBirth = yearOfBirth;
//   this.job =job;
  
// }
// Person.prototype.calculateAge =function(){
//   return 2020 - this.yearOfBirth;
// }
// Person.prototype.getName = function(){
//   return this.name;
// }
// Person.prototype.lastName= 'GNDZ';

// let can = new Person('can',1995,'teacher');
// let ron = new Person('ron',1990,'actor');

// console.log(can.calculateAge());
// console.log(can);
// console.log(can.getName());
// console.log('***********************************');

// console.log(ron.calculateAge());
// console.log(ron);

// //proto persona(can,ron) ait olmayanlar //inherited parça
// console.log(ron.hasOwnProperty('name'));
// console.log(ron.hasOwnProperty('lastName'));





// let Employee = function(name,salary){
//   if(!this instanceof Employee){
//     return new Employee(name,salary);
//   }
//   this.name =name,
//   this.salary=salary
    
// }
// Employee.prototype.calculateSalary = function(){
// let totalSalary = this.salary * 12;
// if(totalSalary <= 20000){
// let tax =  totalSalary * 0.2;
// let kemiksiz = totalSalary *0.8;
// console.log(`yearly tax : ${tax} yearly salary: ${kemiksiz} `); 
// }
// else if(totalSalary <= 30000){
//   let tax =  totalSalary * 0.25;
//   let kemiksiz = totalSalary *0.75;
//   console.log(`yearly tax : ${tax} yearly salary: ${kemiksiz} `); 
// }
// else{
//   let tax =  totalSalary * 0.27;
//   let kemiksiz = totalSalary *0.73;
//   console.log(`yearly tax : ${tax} yearly salary: ${kemiksiz} `); 
// }
// }

// let can = new Employee('can',1000);
// console.log(can.name+' aylık:'+can.salary + can.calculateSalary() );





































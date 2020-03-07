// APP INHERITANCE APP EX.


// PERSON CONSTRUCTOR
function Person(name){
  this.name =name;
}
Person.prototype.Introduce = function(){
  console.log('hello my name is '+this.name);
}

// TEACHER CONSTRUCTOR

function Teacher(name,branch){
  Person.call(this,name);
  this.branch=branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor =Teacher;

Teacher.prototype.teach = function(){
  console.log('I teach '+this.branch);
}

// STUDENT CONSTRUCTOR

function Student(name,number){
  Person.call(this,name);
  this.number=number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function(){
  console.log('my student number '+this.number);
}

// HEADMASTER CONSTRUCTOR

function Headmaster(name,branch){
  Teacher.call(this,name,branch);
}

Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

Headmaster.prototype.shareTask = function(){
  console.log('I have shared');
}


let p1 = new Person('can baran');
p1.Introduce(); console.log('+++++');

let t1 = new Teacher('melih','math');
t1.Introduce();
t1.teach(); console.log('+++++');

let s1 = new Student('alican','2014');
s1.Introduce();
s1.study(); console.log('+++++');

let h1 = new Headmaster('ahmet','bio');
h1.Introduce(); //Person
h1.teach();     //Teacher
h1.shareTask(); console.log('+++++'); //Headmaster



























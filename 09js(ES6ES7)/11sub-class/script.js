// SUb Classes

// ES 5

function PersonES5(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
PersonES5.prototype.sayHi = function() {
  return `Hello there I am ${this.firstName}`;
};

function CustomerES5(firstName, lastName, phone, userName) {
  PersonES5.call(this, firstName, lastName);
  this.phone = phone;
  this.userName = userName;
}

CustomerES5.prototype = Object.create(PersonES5.prototype);

var customer = new CustomerES5("canbaran", "gndz", "123131", "sykolps");

console.log(customer);

console.log(customer.sayHi());
// ES 6
class PersonES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi() {
    return `Hello I am ${this.firstName}`;
  }
}

class CustomerES6 extends PersonES6 {
  constructor(firstName, lastName, phone, userName) {
    super(firstName, lastName);
    this.phone = phone;
    this.userName = userName;
  }
  static getTotal() {
    //objeye bağlı bir işlem değil.
    return 1000;
  }
}
let customer1 = new CustomerES6("volki", "ruby", "46464", "volkitolki");

console.log(customer1.sayHi());
console.log(customer1);
//console.log(customer.getTotal);//hata verir.
console.log(CustomerES6.getTotal());

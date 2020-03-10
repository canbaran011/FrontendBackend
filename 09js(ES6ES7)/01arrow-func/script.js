// Arrow FUnctions

/********************************************** */
//ES 5
let welcomeES5 = function() {
  console.log("Here is for ES 5");
};
welcomeES5();

// ES 6
let welcomeES6 = () => {
  console.log("Here is for ES 6");
};
welcomeES6();

//with parameters *******************************/

// ES 5
let multipleES5 = function(x, y) {
  return x * y;
};
multipleES5(10, 3);

// ES 6
// let multipleES6 = (x,y) => { return x*y};
let multipleES6 = (x, y) => x * y;
multipleES6(2, 8);

// ES 5
let splitES5 = function(text) {
  return text.split(" "); //toArray
};
console.log(splitES5("modern js kursu"));

// ES 6

let splitES6 = text => text.split(" "); // text ()sizde ok
console.log(splitES6("modern js kursu"));

// Object Literals **************************************/

//ES 5
let getProductES5 = function(id, name) {
  return {
    id: id,
    name: name
  };
};
console.log(getProductES5("1", "Samsung A5"));

//ES 6
let getProductES6 = (id, name) => ({
  id: id,
  name: name
});
console.log(getProductES6("x", "y"));

const phones = [
  { name: "iphone8", price: "3600" },
  { name: "iphone7", price: "3000" },
  { name: "iphone6", price: "3200" },
  { name: "iphone5", price: "2900" }
];
// ES 5
let pricesES5 = phones.map(function(phone) {
  return phone;
});
console.log(pricesES5);

// ES 6

let pricesES6 = phones.map(phone => phone.name + " " + phone.price);
console.log(pricesES6);

//filtering
//ES 5
const arr = [1, 2, 3, 6, 10, 30, 50, 55, 61, 79];

let evenES5 = arr.filter(function(a) {
  return a % 2 == 0;
});
console.log(evenES5);

// ES 6
let evenES6 = arr.filter(a => a % 2 == 0);
console.log(evenES6);

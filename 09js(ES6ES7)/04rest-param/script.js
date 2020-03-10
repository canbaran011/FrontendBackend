// Rest Parameters

//ES 5

function sumES5() {
  let arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  let result = 0;

  arr.forEach(function(item) {
    result += item;
  });
  return result;
  // console.log(arguments);
}

console.log(sumES5(10, 20, 30));

// ES6

function sumES6(...arr) {
  let result = 0;
  arr.forEach(item => (result += item));
  return result;
}
console.log(sumES6(10, 20, 50));

function isDriver(age, ...years) {
  //...years parm. en sonda olsn.
  years.forEach(year => console.log(2020 - year >= age));
}
isDriver(18, 1990, 1989, 2008, 2001);

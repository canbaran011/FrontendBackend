// Sets ( collection - unique value)

let val;
var mySet = new Set();
mySet.add(1);
mySet.add(2);

mySet.add(2); //iki varken iki atayamadık
mySet.add("ikikik");
mySet.add({ a: 1, b: 2 });

var obj = { a: 1, b: 2 }; //reference ile atandığından oldu.

mySet.add(obj);

val = mySet.has(1);
val = mySet.has(3);
val = mySet.has(obj);

val = mySet.size;
mySet.delete(1);

console.log(val);
console.log(mySet);

for (let item of mySet) {
  console.log(item);
}

for (let item of mySet.keys()) {
  console.log(item);
}

for (let item of mySet.values()) {
  console.log(item);
}

for (let [key, value] of mySet.entries()) {
  console.log(key, value);
}

console.log(Array.from(mySet));

let mySet2 = new Set([1, 2, 3, 4]);

console.log(mySet2);

// Intersect
var intersect = new Set(Array.from(mySet).filter(x => mySet2.has(x)));
// OR
var intersect = new Set([...mySet].filter(x => mySet2.has(x)));

console.log(intersect);

//Difference setimizi önce array e çevirmeliyiz...
var difference = new Set([...mySet].filter(x => !mySet2.has(x)));

console.log(difference);

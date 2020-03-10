// Arrays in ES6

const boxes = document.querySelectorAll('.box');



// ES 5
let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box){
//     box.style.backgroundColor='green';
// });

// console.log(boxesES5);

//ES 6
// Array.from(boxes).forEach(box => box.style.backgroundColor='green');


//ES 5

// for(let i=0; i<boxesES5.length ; i++){
//     if(boxesES5[i].className=="box blue"){
//         continue;
//     }
//     boxesES5[i].textContent = "i am changed";
//     boxesES5[i].style.bakgroundColor = 'blue';
// }


//ES 6

var boxesES6 = Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className=='box blue'){
//         continue;
//     }
//     box.textContent= "Iam Changed";
//     box.style.backgroundColor='blue';

// }

// from

// let arr = Array.from('modern javascript');

// console.log(arr);

const products = [
    {name:'Samsung s8',price: 3000},
    {name:'Samsung s7',price: 2999},
    {name:'Samsung s6',price: 2988}
]
console.log(Array.from(products, prd => prd));
console.log(Array.from(products,prd => prd.name=='Samsung s8'));
console.log(products.find(prd => prd.name=='Samsung s7'));
console.log(products.filter(prd => prd.name=='Samsung s6'));

console.log(products.findIndex(prd => prd.price==3000));

let numbers =[ 'a','b','c'];

let entries = numbers.entries();

for(let i of entries){
    console.log(i);
}

let keys = numbers.keys();

for(let i of keys){
    console.log(i);
}

let values = numbers.values();
for(let i of values){
    console.log(i);
}


//kalana mozilla dev network den bak.

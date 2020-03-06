//  LOCAL STORAGE

// console.log(window.localStorage);
// console.log(localStorage);
let val;

const firstName = localStorage.setItem('firstName','CanBaran');
const lastName = localStorage.setItem('lastName','Gündüz');
let hobbies =[ 'sinema ','futbol','kitap'];

//Get Item
val = localStorage.getItem('firstName');

// Remove Item
localStorage.removeItem('firstName');
localStorage.removeItem('lastName');

//clear
// localStorage.clear();

//Set array to storage //obj olarak yazmak için JSON 
localStorage.setItem('hobies',JSON.stringify(hobbies));
val= JSON.parse(localStorage.getItem('hobbies'));
//task listteki todo itemleri localStr da obj şeklinde saklamak lazım
//ki tekrar oluştururken tekrar böyle sıralayalım.
//yoksa array splice vs yapmak lazım.

console.log(val);
console.log(localStorage);
console.log('END OF LOCAL');
// // SESSION STORAGE


// const city = sessionStorage.setItem('city','İzmir');
// const country = sessionStorage.setItem('country','Türkiye');

// console.log(sessionStorage);














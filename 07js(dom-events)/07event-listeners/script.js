// Event Listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector
('#btnAddNewTask');

// ilk yöntem

btn.addEventListener('click',function(e){ //click yerine mouseover vs gibi şeyler de olabilir. 
// console.log('buton clicked');
let val;

val = e;

val = e.target; //hangi butonun tıkladığı
val = e.target.id; //butonun idsi
val = e.target.classList;
val = e.type;

console.log(val);
e.preventDefault();

});

// ikinci yöntem //fonk.u farklı işler için kullanabilmek için

// btn.addEventListener('click',btnClick); //iki 
// btn.addEventListener('click',btnClick2); // func da geldi

// btn2.addEventListener('click',btnClick);


// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn clicked');
// }


















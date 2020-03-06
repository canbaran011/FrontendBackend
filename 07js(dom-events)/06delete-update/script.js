const taskList = document.querySelector('#task-list');

//**  removing element  **
// taskList.remove(); //deletes all elements

//taskList.childNodes[7].remove(); //ilk

//son elemanı kolayca sil
// taskList.children[3].remove(); 

// taskList.removeChild(taskList.children[0]); 


// ** removing attribute **

// taskList.children[0].removeAttribute('class');

// for(let i =0 ; taskList.children.length ; i++){
//     taskList.children[i].removeAttribute('class');
// }

// // ** replacing element

// const cardHeader = document.querySelector('.card-header');

// // create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('MyList'));


// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);


// console.log(cardHeader);

// **Classes

let val ;

link = taskList.children[0].children[0];

val = link.className;
val = link.classList;
// val = link.classList[0];
// val = link.classList[2];

link.classList.add('new');
link.classList.remove('new');


// Attributes
val = link.getAttribute('data-id');
val = link.getAttribute('href');
val = link.setAttribute('href','http://www.google.com');
val = link.hasAttribute('href');




// console.log(taskList);
console.log(val);




























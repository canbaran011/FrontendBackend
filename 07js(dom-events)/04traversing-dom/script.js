// Traversing the Dom

let val;

let list = document.querySelector('.list-group');

val = list;

//html collection
// val = list.children;


//nodes şeklinde gelir
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName; //text
val = list.childNodes[0].nodeType; //element

val = list.children;
val = list.children[0];
val = list.children[1];

val = list.children[2].textContent='new item';
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;


val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val= list.parentNode; 
val = list.parentElement;
val = list.parentElement.parentElement;

val= list.children[0].nextSibling;
val = list.children[1].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].nextElementSibling;

// console.log(val);

for(let i=0; i<list.childNodes.length; i++){
    if(list.childNodes[i].nodeType===3){
        console.log(list.childNodes);
    }
}


// for(let i =0; i<list.children.length ; i++){
//     // console.log(list.children[i]);
//     console.log(list.childNodes[i]);
// }





















//































































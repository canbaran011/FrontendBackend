// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


// click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

//double click
// btn.addEventListener('dblclick',eventHandler);

// //mousedown
// btn.addEventListener('mousedown',eventHandler);
// //mouseup ...hmmm something interesting
// btn.addEventListener('mouseup',eventHandler);

// //mouse enter
// ul.addEventListener('mouseenter',eventHandler);
// //mouse leave
// ul.addEventListener('mouseleave',eventHandler);
 

// //mouse over
// ul.addEventListener('mouseover',eventHandler);
// //mouse out
// ul.addEventListener('mouseout',eventHandler);

//mouse move
const h5 = document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);
h5.textContent=`Mouse X : ${event.offsetX} Mouse Y : 
${event.offsetY}`;

}































































































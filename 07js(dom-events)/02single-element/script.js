// selecting elements



// **single elements ++++++++++++++++++++++++++++++++++++


// document.getElementById()
// let val;

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // //val = val.id;
// // val = val.className;

// val.style.fontSize='45px';
// val.style.color='red';
// val.style.fontWeight='bold';

// val = document.getElementById('header').innerText='myWorld';
// val = document.getElementById('header').innerHTML='<i>myWorld</i>';


// console.log(val);

// document.querySelector()

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('h1'));//ilk bulduğunu getirir
document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(2)').style.color='orange';
// document.querySelector('li:nth-child(3)').textContent='task-item';


//class ı değiştirmek
document.querySelector('li').className='list-group-item list-group-item-primary';

//class a yeni bir şey eklemek
document.querySelector('li').classList.add('active');






































































// **multiple elements ++++++++++++++++++++++++++++++++++++
// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()

// *** Multiple Elements

let val;

//grup olarak collection şeklinde alır.
// val = document.getElementsByClassName('list-group-item');

// val= document.getElementsByClassName('list-group-item')[0];

// val= document.getElementsByClassName('list-group-item')[2];

// val = val[2];  // 2. indexteki elemanı seçtik.

// val[1].style.color='blue';
// val[1].style.fontSize='20px';
// val[1].textContent='new item';

// for(let i =0; val.length; i++){
//     console.log(val[i].style.color='red');
//     // console.log(val[i].textContent='new item');
// }


//document.getElementByTagName
val = document.getElementsByTagName('li');

// ul > task-list altındaki a etiketlerini almak 
val = document.getElementById('task-list');
val = document.getElementsByTagName('a');





console.log(val);
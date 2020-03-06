// event bubbling

const form = document.querySelector('form');
const cardBody= document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


// //içten dışa aktarım söz konusu,bu event bubbling denir.
// form.addEventListener('click',function(e){
//     console.log('form');
//     //olay bastığım yer ile kalsın istersek:
//     e.stopPropagation();
// });

// cardBody.addEventListener('click',function(e){
//     console.log('cardBody');
//     e.stopPropagation();

// });

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();

// });

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();

// });


// Event Capturing //dıştan içe doğru gelen olay

// form.addEventListener('click',function(e){
//     console.log('form');
//     //olay bastığım yer ile kalsın istersek:
// },true);

// cardBody.addEventListener('click',function(e){
//     console.log('cardBody');

// },true);

// card.addEventListener('click',function(e){
//     console.log('card');

// },true);

// container.addEventListener('click',function(e){
//     console.log('container');

// },true);

// const deleteItems = document.querySelectorAll
// ('.fa-times');

// deleteItems.forEach(function(item){

//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     });
// });

const ul =document.querySelector('ul');

ul.addEventListener('click',function(e){

    if(e.target.className==='fas fa-times'){
        // console.log('icon ' +e.target);
        // console.log(e.target.parentElement.parentElement.remove());
        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
    // console.log(e.target);
})


// console.log(deleteItems);




















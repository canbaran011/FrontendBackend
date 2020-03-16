/*

ASYNC JS :
1- CALLBACK
2- PROMISE
3- ASYNC / AWAIT

*/


const first = ()=>{
  console.log('first');
  second();

}

const second = ()=> {

  setTimeout( ()=> {
    console.log('second');
  },2000);
  
  third();

}

const third = () => {
  console.log('third');
}


first();









































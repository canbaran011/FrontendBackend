// ERROR HANDLING
// console.log(myFunction());// önceden tanımlı hata verio.

//Reference Error
//Type Error
//Syntax Error
//URI Error

//Error obj temel nesne


var user ={
  name : 'Can Baran'
}


 try{ //hata olabilecek kısımlar try kısmına 
    //console.log(myFunction());
console.log(user.name);
if(!user.email){
  throw new SyntaxError('user has no email.');
  throw new Error('user has no email.');
}


 }
catch(e){ // hata olduğunda yapılacak işlemler
  console.log(e);
  console.log(e.message);//hatanın türü ,adı
  console.log(e.name);//hatanın adı
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
  console.log(typeof e);

}
finally{
  console.log('finally block');
}
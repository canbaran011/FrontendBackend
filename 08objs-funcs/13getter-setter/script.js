
const person ={
  firstName : 'canbaran',
  lastName : 'gündüz',
  // get FullName(){
  //   return `${person.firstName} ${person.lastName}`;
  // },
  // set FullName(value){
  //    const parts =value.split(' ');
  //    this.firstName = parts[0];
  //    this.lastName = parts[1];
  // }
}
Object.defineProperty(person,'fullName',{
  get function(){
    return `${person.firstName} ${person.lastName}`;
  },
  set function(value){
     const parts =value.split(' ');
     this.firstName = parts[0];
     this.lastName = parts[1];
  }
})

Object.defineProperty(person,'age',{
  value:50,
  writable:true
})

person.age=50;
// person.firstName = 'Baran';

person.FullName='Bureue GNDZ';
console.log(person.FullName);
console.log(person);


















































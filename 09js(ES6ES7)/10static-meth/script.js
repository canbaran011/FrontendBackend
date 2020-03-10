// Classes


console.log('+++++++++++++++ ES6 ++++++++++++++++++++++');
// ES 6 
// class PersonES6{
//   constructor(name,job,yearOfBirth){
//     this.name=name;
//     this.job=job;
//     this.yearOfBirth=yearOfBirth;
//   }
//   calculateAge(){
//     return 2020 - this.yearOfBirth;
//   }
//   static sayHi(){
//     console.log('hey , here to sayHi');
//   }
// }
// let ron = new PersonES6('can','none',1990)
// console.log(ron.calculateAge());
// console.log(ron);
//  // ron.sayHi(); //bu şekilde ulaşamıyoruz.
//  PersonES6.sayHi();

class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;

  }
static distance(a,b){
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx,dy);
 }
}

//dışarıdan oluşturduğumuz objeleri buraya yolladık.
const d1 = new Point(10,10);
const d2 = new Point(20,20);

let nokta =Point.distance(d1,d2);
console.log(nokta);

//statik method ları bir hel yardımcı metod oluşturmak
// istediğimizde kullanabiliriz. veri tabanına bağlanıp
// veri çekme silme gibi işlemlerde ,iletişimlerde...




















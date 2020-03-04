//alert("merhaba");

// console.log("object")
// console.log(1234);
// console.log(true);
// console.log([1,2,3,4]);
// console.error("hata oluştu");
// console.warn("bir uyarı");

// /*
// yorum
// */
// console.clear();

// DERS 2 = DEĞİŞKENLER

// Değişken tanımlama kuralları

/*
sayısal ifade ile başlayamaz

// */
// var yas1;
// var _yas2;
// var $yas3;

// //komut isimleriyle tanımlama olmaz
// // birden fazla kelime ile olmaz

// var ad='can baran ';
// var soyad= 'gündüz';

// var ad_soyad = 'CBG';
// var adSoyad =' JBG CBG';

// //case sensitive (büyük küçük duyarlılığı)
// var firstName='CAN';
// var FirstName='BARAN';

// console.log(firsName);
// console.log(FirstName);

// //var , let , const
// // var let scope ile ilgili
// //const sabit değer...

// let city= 'Kocaeli';
// console.log(city);

// const email= 'abc@gmail.com';
// console.log(email);

// email = 'bcg';

// console.log("++++++++++++++++++++++++++++");

// var age;
// console.log(age);

// age=20;

// console.log(age);
// /* */
// var fullName='CBG';
// console.log(fullName);

// fullName='JBL CBG'
// console.log(fullName);

//DERS 3 DEĞİŞKEN TİPLERİ

// //Primitive Types

// //String
// let firstName = 'Can Baran';
// console.log(typeof firstName);

// //Number
// let age = 20;
// let money= 100.5;
// console.log(typeof age);
// console.log(typeof money);

// //boolean
// let isActive =true;
// console.log(typeof isActive);

// //null
// let job=null;

// //undefined
// let car;
// console.log(typeof car);

// // Reference Types

// //array
// let names= ['ali','ahmet','can'];
// console.log(names);
// console.log(typeof names);

// //Object
// let address ={
//     city:'İzmir',
//     country:'TR'
// }
// console.log(address);

// //Function

// var calculateAge = function(){
//     return 0;
// }
// console.log(typeof calculateAge);

// // DERS 4 DEĞİŞKEN TİP DÖNÜŞÜMÜ

// //stringi number a çevirdik.
// let num1 = Number('5');
// console.log(typeof num1);

// let num2 = Number('10');

// let total = num1+num2;

// console.log(total);

// console.log(num1 + num2);
// console.log(typeof num2);

// //number ı stringe çevirdik.
// let val;
// val = String(10);

// console.log(typeof val);
// console.log(val.length);

// // bool dan stringe çevirme
// val = true;
// val = String()
// console.log(typeof val);

// // date i stringe çevirme
// val = String(new Date().getDay());
// console.log(val);
// console.log(typeof val);

// // array to string

// val = String([1,2,3,4])
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // toString()

// val = (10).toString();
// val = (false).toString();

// let ab = true;
// let v;
// v = (ab).toString();

// console.log(ab);
// console.log(v);
// console.log(typeof v);

// // string to Number
// //length sadece string uzunluğunu bulur.
// let val;
// val = Number ('10'); //10
// val = Number(true); //1
// val = Number(false); //0
// val = Number(null); // 0  console.log(val);
// val = Number('a'); //Nan Not a Number
// val = Number([1,2,3,4]); //NaN

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// //parseInt
// //parseFloat

// let nmb, nmb2,nmb3;
// nmb = parseInt('10'); //10
// nmb2 = parseInt('10.5'); //10
// nmb3 = parseFloat('10.5'); //10.5

// console.log(nmb , nmb2 ,nmb3); //up
// console.log(typeof nmb ); //number all below
// console.log(typeof nmb2);
// console.log(typeof nmb3);

// // DERS 5 UYGULAMA

// var customerName = 'CanBaran';
// var customerLastName = 'Gündüz';

// var fullName ='CanBaran Gündüz';
// var musteriId= '12312314234234';

// var total = 205.6;
// var gender = true; // e true

// var address ={
//     city: 'İzmir',
//     district: 'Çiğli',
//     body:'Mahallesi'
// }

// var hobbies = ['kitap','sinema','spor'];

// var order1=Number('100');
// var order2=Number('150');

// var totalOrder = order1 +order2;
// console.log(totalOrder);

// var order3=Number('100.2');
// var order4=Number('150.5');

// var totalOrder2 = order3 + order4;
// console.log(totalOrder2);

// var order5=parseInt('100.2');
// var order6=parseInt('150.5');

// var totalOrder3 =order5 + order6;
// console.log(totalOrder3);

// //değiştirilmemesi gereken şeylerde
// const yearOfBirth = 1995;
// console.log(new Date().getFullYear()- yearOfBirth);

// var course = 'Modern Javascript Course';

// console.log(course.length);

// DERS 6 OPERATÖRLER

// //operatörler
// let val;
// const a=10;
// const b=5;
// const c =5;
// let  d=3;

// // 1 aritmetik operatörler
// val = a+b;
// val = a-b;
// val = a*b;
// val = a/b;
// val = a%b;
// val = d++;
// val = ++d;
// val = --d;
// val = d--;

// // 2 atama operatörleri

// val = a;
// val += a; // val = val + a;
// val *= a;
// val /= a;
// val %= a;
// val -= a;

// // 3 karşılaştırma operatörleri
// val = a==b;
// val = b==c;
// val = a===b;
// val = b===c;//hem değer hem tip kontrolü
// val = 5==='5';
// val = 5===5;
// val = a!==b;
// val = a>b;
// val = a<b;
// val = a>=b;
// val = a<=b;
// //eşittir sağ tarafta olmalı

// // 4 mantıksal operatörler
// // && (and) 1 ve 1 = 1 , others 0
//   val =  (a>b) && (a>c)

// // || (or)

//     val = (a<b) || (a<c)

// //  ! (not)
//     val = !(a>b)

// /* ++++++++++++++++++++++++++++ */
// console.log(val);
// console.log(typeof val);

// DERS 7 OPERATÖRLER UYGULAMA
// let IndexCan;
// let IndexAda;

// const kgCan = 60;
// const kgAda = 62;

// const heightCan = 1.70;
// const heightAda = 1.74;

// IndexAda = (kgAda) / (heightAda * heightAda);
// IndexCan = (kgCan) / (heightCan * heightCan);

// let adaHigherIndex = IndexAda > IndexCan;
// let canHigherIndex = IndexCan > IndexAda;

// console.log("adanın kilo indeksi > can"+
// adaHigherIndex);

// console.log("canın kilo indeksi > ada"+
// canHigherIndex);

// let adaZayif = (IndexAda>=0) && (IndexAda<=18.4);
// let adaNormal= (IndexAda>=18.4) && (IndexAda<=24.9);
// let adaKilolu= (IndexAda>=25) && (IndexAda<=29.9);
// let adaSisman= (IndexAda>=30) && (IndexAda<=34.9);

// console.log("adazayıf : " + adaZayif);
// console.log("adanormal : " + adaNormal);
// console.log("adakilolu : " + adaKilolu);
// console.log("adaşişman: " + adaSisman);

// console.log(IndexAda.toFixed(1) + " = ada");
// console.log(IndexCan.toFixed(1) + " = can");

// DERS 8 DATE OBJECT

// let d = new Date();
// let birthday = new Date(1990,1,5);

// //SET Methods

// d.setFullYear(2021);
// d.setMonth(5);
// d.setDate(24);
// d.setHours(10);
// d.setMinutes(12)

// //GET Methods
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getMonth()); // 0 ocak ayıdır 1 şubat
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getDay() - birthday.getDay());

// console.log(d);
// console.log(typeof d);

//  DERS 9 DATE OBJ UYGULAMA

// var dt = new Date();

// // şimdiki tarihin ay yıl gün yazdır.
// console.log(dt.getMonth()+1);
// console.log(dt.getDate());
// console.log(dt.getFullYear());

// console.log(dt);

// //tarih ve saat bilgisi içeren date obj oluştur
// var dta = new Date('8/24/2020');
// var dtb = new Date(2010,7,24,14,50,10);

// console.log(dta);
// console.log(dtb);

// // 1/1/1990 tarihinden bir gün önceyi göster.
// var dtc = new Date('1/1/1990');
// var dayOfMonth = dtc.getDate();
// dtc.setDate(dayOfMonth-1);

// console.log(dtc);
// // iki tarih arasındaki geçen zamanı bul
// var start = new Date('1/1/1990')
// var end = new Date('1/1/1991');

// var milisecond = end - start;
// var saniye = milisecond / 1000;
// var dakika = saniye /60;
// var saat = dakika / 60;
// var gun = saat / 24;

// console.log("milisecond : "+milisecond);
// console.log("saniye : "+saniye);
// console.log("dakika : "+dakika);
// console.log("saat : "+saat);
// console.log("gün : " +gun);
// // her yıl mayısın ikinci haftası pazar
// //günü kutlanan anneler günü 2020 de ne zaman
// // kullanılacaktır.
// var annelerGunu = new Date();
// annelerGunu.setHours(0,0,0,0);
// annelerGunu.setFullYear(2020);
// annelerGunu.setDate(1);
// annelerGunu.setMonth(4);

// while(annelerGunu.getDay() != 0){
//     annelerGunu.setDate(annelerGunu.getDate()+1)
// }
// annelerGunu.setDate(annelerGunu.getDate()+7);
// console.log(annelerGunu);

// // yaş hesaplama nasıl yapılır
// var birthday = new Date('8/1/1986');
// var ageDifMs = Date.now() - birthday.getTime();
// var ageDate = new Date(ageDifMs);

// console.log(ageDate.getFullYear() - 1970);
// // console.log(birthday.getTime());
// // console.log(Date.now());

//DERS 10 NUMBERS

// let val;

// // val = Number('10');
// // val = parseInt('10.5');
// // val =parseFloat('10.5');
// // val = parseInt('a10a');
// // val = isNaN('a10a');
// var num = 10.123456789;
// val = num.toPrecision(5);
// val = num.toFixed(3);

// val = Math.PI;
// val = Math.round(2.4)
// val = Math.round(2.7);
// val = Math.ceil(2.4);
// val = Math.floor(2.9);
// val = Math.sqrt(64);
// val = Math.pow(2,4);
// val = Math.abs(-1425);
// val = Math.min(1,2,5,6,-3);
// val = Math.max(1,3,56,54,89);
// val = Math.random(); // 0- 1 arası
// val = Math.random()*10;
// val = Math.floor(Math.random()*100+1);//1den 100e

// console.log(val);
// console.log(typeof val);

// DERS 11 NUMBERS UYGULAMA

//   var num = 15.123456789;
// // toplam 3 basamaklı sayı

// console.log(num.toPrecision(3));

// //ondalık kısmı 3 basamakla sınırla

// console.log(num.toFixed(3));

// //en yakın sayıya yuvarla

// console.log(Math.round(num));

// //aşağı yuvarla

// console.log(Math.floor(num));

// //yukarı yuvarla

// console.log(Math.ceil(num));

// // 1,2,10,56,20 min max değerlerini bul
// // num = 1,2,10,56,20;
// console.log(Math.min(1,2,10,56,20));
// console.log(Math.max(1,2,10,56,20));

// // sayı aralığını kullanıcının gireceği rastgele
// // bir sayı üretin.

// var min = 50;
// var max = 100;

// console.log(Math.floor(min+Math.random()*(max-min)));

// /*
// personelin yaptığı mesai ye göre aldığı maaşı
// hesaplayalım.
// ** Brüt Maaş: 3700 TL
// ** Brüt mesai: 10.3 TL
//     Ağustos ayı mesai toplamı 42 saat ise toplam
//     brüt maaş nedir?
//     Brüt maaş üzerinden toplam kesinti oranı
//     %25 ise alınacak toplam net maaş nedir?

// */

// let brutMaas = 3700;
// let brutMesai= 10.3;
// let mesaiSure = 42;

// topBrut = parseFloat((brutMaas + (brutMesai * mesaiSure)));
// sonMaas = parseFloat(topBrut*0.75);

// console.log(topBrut.toFixed(2));
// console.log(sonMaas.toFixed(2));

// DERS 12 STRINGS

// const firstName = 'CanBaran';
// const lastName = "Gündüz";
// const age = 24;
// let hobbies = 'sinema,spor,kitap,yazılım';
// let val;

// //string concatenation

// val = firstName + " " + lastName;
// val = 'CanBaran';
// val += ' Gündüz';

// // val = 'Benim adım '+firstName+' ' +lastName+
// // ' yaşım '+ age + " İzmir'de yaşıyorum";

// //string concat

// // val = firstName.concat(' , ',lastName);

// //string length

// // val = val.length;

// //string uppercase- lowercase

// // val = val.toUpperCase();
// // val = val.toLowerCase();

// // val = val.indexOf('a');

// //substring
// // val = val.substring(3,8);

// //slice

// // val = val.slice(5); //5 ten bitişe

// //string replace

// val= ' ' +val.replace('CanBaran','NRCML')+ '  ' ;

// // trim
// val = val.trim();

// val = hobbies.split(',')

// console.log(val);
// console.log(typeof val);

// // DERS 13 TEMPLATE LITERALS

// const fullName = 'Can Baran';
// const city = 'İzmir';
// const yearOfBirth = 1999;

// let val;

// val = 'my name is '+ fullName +
//  ' I\'m '+(2020-yearOfBirth) + ' years old.' +
//  ' and I live in '+city;

// val = ` my name is ${fullName} I'm
// ${(2020-yearOfBirth)>=18? 'over 18':'under 18'}
// years old and i live in ${city} `

// console.log(val);

// DERS 14 : STRINGS UYGULAMA

// var sentence = " Template literals or template  strings is the ability Have multi-line strings without any funny busisness. ";

// var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

// //cümle kaç karakterlidir

// let val;
// console.log(sentence.length);

// //kaç kelimeden oluşuyor

// console.log(sentence.trim().split(' ').length);

// // küçük harfe çevir

// console.log(sentence.toLowerCase());
// console.log(sentence.toLocaleUpperCase());

// //baş ve sontaki boşlukları sil

// console.log(sentence.trim());

// // '-' karakterini silin.

// console.log(sentence.replace('-',' '));

// // urlnin içinden str kısmını çıkarın.
//  var str = 'http://';
//  console.log(url.substr(str.length));
// console.log(url.slice(str.length));

// //url hangi protokolü kullanmaktadır.
// console.log(url.startsWith('http'));
// console.log(url.startsWith('https'));

// //url com içeriyor mu?
// console.log(url.indexOf('.com'));
// console.log(url.includes('.com'));

// // geçerli haline çevir
// console.log(url.toLocaleLowerCase()
//         .replace(/ /g,'-')
//         .replace(/ı/g,i)

// );

// DERS 15 ARRAYS

// let names = ['can','çınar','ada','yiğit'];

// let years =[2017,1995,2005,2000];

// let mix = ['can', 'baran' , 1995,null,undefined,
// ['sinema','kitap']];

// // // get array item
// // console.log(names[0]);
// // console.log(names[3]);

// // //set array item
// // // names[5] ='emel'; //4 e boş eleman 5 e emeli atar
// // names[names.length] = 'emel' //sona ekler

// // //add item
// // years.push(1986);
// // years.unshift(1987);

// // //remove item
// // years.pop();
// // years.shift();

// // //indexof
// // let index=names.indexOf('ada');
// // console.log(index +" index");

// // //reverse
// // names.reverse();

// // //sort
// // years.sort();

// // //concat
// // let val = years.concat(names);
// // console.log(val);

// //splice
// // names.splice(2,0,'seda');
// //2. elemandan sonra kimseyi silmeyip
// //sonrasına seda yı ekledi

// //fun

// function over18(year){
//     let age = 2020 - year;
//     return age >= 18;
// }

// //find //bulduğu ilk değeri döner

// // let val =years.find(over18);

// //filter

// let val = years.filter(over18)

// console.log(val);

// console.log(names);
// console.log(names.length);
// console.log(typeof names);
// console.log("++++++++++++++++++++++");
// // console.log(years);
// // console.log(mix);
// // console.log("++++++++++++++++++++++");

// DERS 16 ARRAYS UYGULAMA

// //dizi oluştur.
// let oto = ['Bmw', 'Mercedes','Opel','Mazda'];
// console.log(oto);
// // Dizi kaç elemanlıdır

// console.log(oto.length);

// //dizinin ilk ve son elemanı nedir?

// console.log(oto[0]+' '+oto[oto.length-1]);

// //renault değerini sona ekle

// console.log(oto.push('renault'));
// console.log(oto);

// //toyota başa ekle
// console.log(oto.unshift('toyota'));
// console.log(oto);

// //renault sil
// console.log(oto.pop('renault'));
// console.log(oto);

// //toyota sil
// console.log(oto.shift('toyota'));
// console.log(oto);

// //diziyi ters çevir
// console.log(oto.reverse());
// console.log(oto);

//  //alfabetik sırala
//  console.log(oto.sort());

//  //[1,2,5,80] dizisini sıralayın.

// let num = [1,2,5,80];
// console.log(num.sort());

// //opel dizinin elemanı mı ?

// console.log(oto.indexOf('Opel'));
// console.log(oto.includes('Opel'));

// // var str = "Chevrolet,Dacia";
// // ifadesini diziye çevir

// var str = "Chevrolet,Dacia";
// var str2 = str.split(',');
// console.log(str2);

// // oluşturulan 2 dizinin elemanlarını başka dizi
// // ile birleştirin...

// var str3 = oto.concat(str2);
// console.log( str3 );

// // oluşan dizinin son 2 elemanını sil
// // console.log(str3.pop());
// // console.log(str3.pop());

// // console.log(str3.splice(4,2));
// //console.log(slice(4,6));

// /*
// aşağıdaki elemanları bir dizi içerisinde saklayınız

// studentA : Yiğit Bilgi 2010
// studentB : Can  Baran 1995
// studentC : Mahmu Tuncer 2000

// */
// var studentA =['Yiğit' ,'Bilgi', 2010];
// var studentB =['Can', 'Baran' ,1995];
// var studentC =['Mahmut' ,'Tuncer', 2000];

// var students = [studentA,studentB,studentC];

// console.log(students[0][1]);
// console.log(students);

// DERS 17 KOŞUL İFADELERİ

// const firsName = "Sena";
// const age = 19;
// const isStudent = false;
// const school = "university";

// if(firsName === 'Sena'){
//     console.log('merhaba Sena');
// }
// if(age ===19){
//     console.log('yaşınız 19');
// }
// if(isStudent){
//     console.log('merhaba öğrenci');
// }
// else{
// console.log('işler nasıl');
// }

// if (age >= 18) {
//   if (school == "university") {
//     console.log("ehliyet alabilirsin");
//   } else {
//     console.log("eğitim yetersiz");
//   }
// } else {
//   console.log("yoooo alamazsın");
// }

// if(  (age > 0) && (age<12) ){
//     console.log(` ${firstName} is a child`);
// }
// else if( age >= 13 && age<=19){
//     console.log(` ${firsName} is a teenager `);
// }
// else{
//     console.log(` ${firstName} is an adult `);
// }
// let id = '3123112'

// if(typeof id !== 'undefined'){
//     console.log('id: '+id);
// }
// else{
//     console.log('no id');
// }


//  DERS 18 SWITCH

// let category = 'beyaz eşya';

// switch(category){
//     case 'telefon':
//         console.log('tel kategorisi');
//     break;

//     case 'bilgisayar':
//         console.log('bilgisayar kat');
//     break;

//     default:
//         console.log('yanlış');

// }

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Pazar";
//     break;

//   case 1:
//     day = "Pazartesi";
//     break;

//   case 2:
//     day = "Salı";
//     break;

//   case 3:
//     day = "Çarşamba";
//     break;

//   case 4:
//     day = "Perşembe";
//     break;
    
//   case 5:
//     day = "Cuma";
//     break;

//   case 6:
//     day = "Cumartesi";
//     break;
// }
// console.log(`bugün günlerden ${day}`);
// switch (new Date().getDay()) {
//   case 0:
//   case 6:
//     day = "Hafta Sonu";
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     day = "Haftaİçi";
// }

// console.log(`bugün  ${day}`);
// const age = 19;
// const firstName = 'Sena';

// switch(true){
//     case age>=0 && age<12:
//         console.log('child');
//         break;

//     case age>=13 && age<19:
//         console.log('teenager');
//         break;

//     case age>19:
//         console.log('adult');
//         break;
//     default:
//         console.log('yanlış');
//     }

// DERS 19 KOŞUL UYGULAMA

// var trafigeCikis = new Date('04/20/2016');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun = Math.floor(trafiktekiMs / (1000*60*60*24));

// if(trafiktekiGun<=365){
//     console.log('1.servis zamanı');
// }
// else if(trafiktekiGun>=365 && trafiktekiGun<=365*2){
//     console.log('2. servis zamanı');
// }
// else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//     console.log('3. servis zamanı');
// }else{
//     console.log('bilmiyorum');
// }


// // console.log(trafiktekiGun.toFixed());

// var result = prompt('who is there?');

// if(result == 'cancel'){
//     console.log('cancelled');
// }
// else if(result == 'Admin'){
   
//     var password = prompt('enter your password');

//         if(password == 'cancel'){
//             console.log('cancelled');
//         }else if(password == '1234'){
//             console.log('welcome admin2');
//         }else{
//             console.log('wrong password');
//         }
// }
// else{
//     console.log('i dont know you');
// }

// DERS 20 OBJECT LITERALS

// let val;

// let person = {
//     firstName: 'CanBaran',
//     lastName: 'Gündüz',
//     age:1,
//     hobbies : ['music','game','spor'],
//     address :{
//         city:'izmir',
//         country: 'Türkiye',
//         },
//     getBirthYear :function(){
//         return 2020 - this.age;//person u işaret eder
//     }
// };

// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address;
// val = person.address.city;
// val = person.getBirthYear();


// let people = [
//     {firsName: 'CanBaran',lastName:'Gündüz'},
//     {firsName: 'Nurcemal',lastName:'Gündüz'},
//     {firsName: 'Uygar',lastName:'Gündüz'},
// ];

// val = people[2];
// val = people[2].firsName;

// for(let i=0; i<people.length ; i++){
//     console.log(people[i].firsName);
// }

// console.log(val);
// console.log(typeof person);

// DERS 21 OBJECT LIT UYGULAMA




// var aracBilgileri =[
//  {
//     id: 'bmw116d_1234',
//     model:'bmw 116d',
//     yil: 2015,
//     renk: 'Beyaz',
//     servisKayitlari: [
//         {
//             id:'bmw116d_1234_1',
//             tarih: '20.001.2016',
//             km : '13000',
//             ucret:900,
//             detay: [
//                 {
//                     id: 'bmw116d_1234_1_1',
//                     aciklama:'yağ değişimi ücret',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw116d_1234_1_2',
//                     aciklama:'filtre değişimi ',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw116d_1234_1_3',
//                     aciklama:'fren hidroliği',
//                     ucret:300
//                  }
//             ]
//         },
//         {
//             id:'bmw116d_1234_2',
//             tarih: '10.01.2017',
//             km : '28000',
//             ucret:1800,
//             detay: [
//                 {
//                     id: 'bmw116d_1234_2_1',
//                     aciklama:'yağ değişimi ücret',
//                     ucret:350
//                  },
//                  {
//                     id: 'bmw116d_1234_2_2',
//                     aciklama:'filtre değişimi ',
//                     ucret:350
//                  },
//                  {
//                     id: 'bmw116d_1234_2_3',
//                     aciklama:'fren hidroliği',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw116d_1234_2_4',
//                     aciklama:'balata değişimi',
//                     ucret:800
//                  }
//             ]
//         }

//     ]
// },
// {
//     id: 'bmw118d_1234',
//     model:'bmw 118d',
//     yil: 2016,
//     renk: 'Beyaz',
//     servisKayitlari: [
//         {
//             id:'bmw118d_1234_1',
//             tarih: '20.001.2016',
//             km : '13000',
//             ucret:900,
//             detay: [
//                 {
//                     id: 'bmw118d_1234_1_1',
//                     aciklama:'yağ değişimi ücret',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw118d_1234_1_2',
//                     aciklama:'filtre değişimi ',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw118d_1234_1_3',
//                     aciklama:'fren hidroliği',
//                     ucret:300
//                  }
//             ]
//         },
//         {
//             id:'bmw118d_1234_2',
//             tarih: '10.01.2017',
//             km : '28000',
//             ucret:1800,
//             detay: [
//                 {
//                     id: 'bmw118d_1234_2_1',
//                     aciklama:'yağ değişimi ücret',
//                     ucret:350
//                  },
//                  {
//                     id: 'bmw118d_1234_2_2',
//                     aciklama:'filtre değişimi ',
//                     ucret:350
//                  },
//                  {
//                     id: 'bmw118d_1234_2_3',
//                     aciklama:'fren hidroliği',
//                     ucret:300
//                  },
//                  {
//                     id: 'bbmw118d_1234_2_4',
//                     aciklama:'balata değişimi',
//                     ucret:800
//                  }
//             ]
//         }

//     ]
// },
// {
//     id: 'bmw320d_1234',
//     model:'bmw 320d',
//     yil: 2018,
//     renk: 'Beyaz',
//     servisKayitlari: [
//         {
//             id:'bmw320d_1234_1',
//             tarih: '20.01.2016',
//             km : '13000',
//             ucret:900,
//             detay: [
//                 {
//                     id: 'bmw320d_1234_1_1',
//                     aciklama:'yağ değişimi ücret',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw320d_1234_1_2',
//                     aciklama:'filtre değişimi ',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw320d_1234_1_3',
//                     aciklama:'fren hidroliği',
//                     ucret:300
//                  }
//             ]
//         },
//         {
//             id:'bmw320d_1234_2',
//             tarih: '10.01.2017',
//             km : '28000',
//             ucret:1800,
//             detay: [
//                 {
//                     id: 'bmw320d_1234_2_1',
//                     aciklama:'yağ değişimi ücret',
//                     ucret:350
//                  },
//                  {
//                     id: 'bmw320d_1234_2_2',
//                     aciklama:'filtre değişimi ',
//                     ucret:350
//                  },
//                  {
//                     id: 'bmw320d_1234_2_3',
//                     aciklama:'fren hidroliği',
//                     ucret:300
//                  },
//                  {
//                     id: 'bmw320d_1234_2_4',
//                     aciklama:'balata değişimi',
//                     ucret:800
//                  }
//             ]
//         }

//     ]
// }

// ];

// console.log(aracBilgileri[0]);
// console.log(aracBilgileri[1].id);
// console.log(aracBilgileri[2].model);
// console.log(aracBilgileri[2].renk);
// console.log(aracBilgileri[2].renk);
// console.log(aracBilgileri[2].servisKayitlari);
// console.log(aracBilgileri[2]
//     .servisKayitlari[0].detay[0]);

// DERS 22 LOOPS
 
//loops

// // for loops

// for(let i=0; i<10 ; i++){

//     if(i==3){
//         console.log('en sevdiğim sayı 3');
//         continue; //sonrakine geçer.
//     }
//     if(i==6){
//         console.log('en sevmediğim rakam 6');
//         break; //durur orada
//     }
// console.log(i);
// }

// while döngüsü

// let i=1;

// while(i<20){
//     console.log(i);
//     i++;
// }

// do -while döngüsü
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

/* ++++++++++++++++++++++ */

// let sonuc =0;

// for(let i=10 ; i>0 ; i--){
   
//    if(i%2 == 0){
//     sonuc += i;
//    }

// }
// console.log(sonuc);

// let val='\n'
// for(let i =0; i<10 ; i++){
//     for(let j=0; j<10 ; j++){
//         // console.log(`i : ${i} j: ${j}`);
//         val += '<|>'
//     }
//     val += '\n';
// }
// console.log(val);

// DERS 23 LOOPS ON ARRAYS

// let cars =['bmw','fiat','toyo'];
// let people =[
//     {firstName:'Can', lastName:'Gündüz'},
//     {firstName:'Rıfat', lastName:'Ilgaz'},
//     {firstName:'Mahmut', lastName:'Tuncer'}
// ]

//Object
// for(let i=0; i<people.length; i++ ){
//     console.log(people[i].firstName);
// }

//Arrays
// for(let i=0; i<cars.length ; i++){
//     console.log(cars[i]);
// }


//For In
// for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }

// for(let i in people){
//  console.log(`index : ${i} value : ${people[i].firstName}`);

// }

// console.log(typeof cars);

// FOR EACH

// cars.forEach(function(item){
//     console.log(item);

// });
// people.forEach(function(item){
// console.log(item.firstName);
// });

//map : returns an array
// let val = people.map(function(item){
// return item.firstName+' '+item.lastName;
// });

// console.log(val);

// let numbers = [1,5,6,8,10];

// let num =  numbers.map(function(n){
//     return n*n;
// });
// console.log(num);

// DERS 24 DÖNGÜ UYGULAMA

/* sayı tahmini oyunu
1-10 arasında rastgele üretilebilen bir sayıyı
aşağı yukarı ifadeleri ile buldurmaya çalışın.
** puanlama yapın 100 üzerinde
** kullanıcı kaç kerede bilebileceğini belirtsin.
*/
// var hak,can;
// var tahmin , sayac=0;
// var sayi = Math.floor((Math.random()*10)+1);
// can = Number(prompt('kaç kere de bileceksin ?'));
// hak =can;

// console.log(sayi);

// while(hak>0){
//     hak--;
//     sayac++;
//     tahmin = Number(prompt('bir sayı girin'));
//     if(sayi==tahmin){
//         alert(`Tebriks ${sayac} defada bildin.`);
//         alert(`puan : ${100 -(100/can)*(sayac-1)}`);
//         break;
//     }else if(sayi>tahmin){
//         alert(`HIGHER`);
//     }else{
//         alert('DOWN')
//     }
//     if(hak ==0){
//         alert('dur hele soluklan yeğenim.\n HAKKIN BİTTİ');
//     }
// }

// console.log('right');
// console.log(random);

// DERS 25 FUNCTIONS 
// function yasHesapla(dogumYili){
//     ;

//     return  2020 - dogumYili;;
// }

// let ageCan =yasHesapla(1995);
// let ageUmut =yasHesapla(2002);
// let ageYusuf=yasHesapla(1997);

// console.log(ageCan);
// console.log(ageUmut);
// console.log(ageYusuf);

// function EmeklilikKacYil(dogumYili,isim){
//     let yas = yasHesapla(dogumYili);
//     let emeklilik = 65 - yas ;

//     if(emeklilik>0){
//         console.log(`${isim} Emekli olmanıza 
//         ${emeklilik} yıl kaldı.`);
//     }else{
//         console.log(`zaten emekli oldunuz:`+isim);
//     }
// }

// EmeklilikKacYil(1995,'can');
// EmeklilikKacYil(2000,'rasim');
// EmeklilikKacYil(1900,'mahmut');

//DERS 26 FUNCTION UYGULAMA

// var hesapA = {
//     ad:'can baran',
//     hesapNo : '12345',
//     bakiye : 2000,
//     ekHesap : 1000
// }

// var hesapB = {
//     ad:'emel baran',
//     hesapNo : '123456',
//     bakiye : 3000,
//     ekHesap : 2000
// }

// function paraCek(hesap,miktar){
//     console.log(`Merhaba ${hesap.ad}`);
//     if(hesap.bakiye >= miktar){
//         hesap.bakiye = hesap.bakiye -miktar;
//         console.log(`paranızı alabilirsiniz.`);
//     }else{
//         var toplam = hesap.bakiye+hesap.ekHesap;
//         if(toplam >= miktar){
//             if(confirm('ek hesap kullan?')){
//                 console.log('paranı al.');
//                 var bakiye = hesap.bakiye;
//                 var ekHesap = miktar - bakiye;
//                 hesap.bakiye =0;
//                 hesap.ekHesap = hesap.ekHesap - ekHesap;
//             }else
//             console.log((`${hesap.hesapNo}
//              nolu hesabınızda ${miktar} yoktur`));
//         }
//         else{
//             console.log('bakiye yetersiz');
//         }
//     }
// }

// paraCek(hesapA,2000);
// paraCek(hesapA,500);
// // paraCek(hesapB,2000);


// DERS 27 WINDOW OBJECT
// let val;
// // val = window;
// var a =10;
// function abc(){
//     return 0; 
// };

//alert
//alert('--merhaba--')

//prompt
// var b = prompt('bir sayi giriniz');
// console.log(b);

//confirm
// val = confirm('emin misiniz? ');
// true false döner.
// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }


//scroll
// val = window.scrollX;
// val = window.scrollY;
// val = scrollX;

//location
// val = window.location;
// val = window.location.href;
// val = window.location.hostname;
// val = window.location.host;
// val = window.location.protocol;
// val = window.location.search;

//window.location.href = '';
//window.location.reload;
//window.navigator; // tarayıcı bilgileri

//window.document // sayfanın html çıktısını alır
// document.getElementById('header');


// console.log(val);

// DERS 28 SCOPES

//yazdığımız değişkenin hangi kod bloğu tarafından
//görülüp görülemeyeceği.

// ** GLOBAL SCOPE
var name = 'CanBaran';
var age =25;

function logName(){
    var name='Ada';
    var age= 19;

    console.log('funasdadsac içi '+name);
}
if(true){
    var age =30;
    console.log('block scope '+name+age);
}

console.log(age);
logName();
console.log(name);
// console.log(age);

// ** LOCAL SCOPE

// fonksiyonlar kendi scopelarını oluşturur
// blocklar yeni scope oluşturmaz
//ES& ile gelen let ve const block scope oluşturu



console.log("++++++++++++++++++++++++++++");

if(true){
    var model='Opel';
    let year=2016;
    const color = 'white';
    console.log('block+scope ',name,age);
}

console.log(model);// yazar
//  year ve color hata verir.
// console.log('block scope',model,year,color);

var a =1;
for(let i=0; i<10 ; i++){ //let olmalıdır
    console.log('i '+i);
}
console.log(i);












































































































































































































































































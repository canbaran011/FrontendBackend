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

const firstName = 'CanBaran';
const lastName = "Gündüz";
const age = 24;
let val;

//string concatenation

val = firstName + " " + lastName;
val = 'CanBaran';
val += "Gündüz";

val = 'Benim adım '+firstName+' ' +lastName+
' yaşım '+ age + " İzmir'de yaşıyorum"

//string concat

val = firstName.concat(' ',lastName)

//string length

val = val.length;

//string uppercase- lowercase

// val = val.toUpperCase();
// val = val.toLowerCase();

val = val.indexOf('a');
val = val.substring(3,8);
//




console.log(val);
console.log(typeof val);











































































































































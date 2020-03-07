// string

var str1 = 'canbaran';
var str2 = new String('CanBaran');


console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if(str2 =='CanBaran'){
  console.log('yes');
}else{
  console.log('no');
}
//protolar altında yeni string metodu oluşturmak
String.prototype.repeat = function(n){
  return new Array(n+1).join(this);
}
console.log('canbaran'.repeat(2))
 
//Number
var num1 = 10;
var num2 = new Number(10);

//Boolean 
var bool1 = true;
var bool2 = Boolean(true);

//Object
var obj1 = {
  name: 'canbaran'
}
var obj2 = new Object({
  name:'CanBaran'
});

//Array
var arr1 = ['can','baran','gündüz','çınar'];
var arr2 = new Array('ada','yigit','can');

Array.prototype.remove = Array.prototype.remove ||
function(member){
  var index = this.indexOf(member);
  if(index > -1){
    this.splice(index ,1);
  }
return this;
}

console.log(arr1.remove('baran'));





























































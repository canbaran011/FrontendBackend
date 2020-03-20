// npm paketlerini yönetmek için package.json ile,
// bunu yaparız. npm init ile kolayca oluştururuz.

// npm init --yes ile soru sormadan yapar.

// package.json var ise projemizde node_modules i silsek bile 
//packages de hangi paketler olduğunu bildiğimizden .
// npm install dediğimizde node_modules geri gelir.

var _ = require('underscore');
//underscore sitesinden kullanabileceğimiz metodları
// görebilir ve örnek yapabiliriz.

var numbers = [10, 5, 100, 2, 1000];


console.log(_.min(numbers));

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];


console.log(_.max(stooges, function(stooge){ return stooge.age; }));












































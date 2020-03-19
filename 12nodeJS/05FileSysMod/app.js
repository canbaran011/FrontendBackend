
const fs = require('fs');

//file operations 

/*
const files = fs.readdir('./',function(error,data){

if(error){
    console.log(error);
}else{
    console.log(data);
}


});
*/

/*
const data = fs.readFile('index.html','utf-8',function(error,data){
if(error){
    console.log(error);
}else{
    console.log(data);
}
});

*/

/*
fs.writeFile('deneme2.txt','Hello Deneme',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('file created');
    }
}) // aynı isimle tekrar oluşturursak öncekini siler yeniyi y.
*/

/* 
fs.appendFile('deneme2.txt','Hello Deneme',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('file created');
    }
})// ekleme yapar içini silmeden
*/

/*
fs.unlink('deneme.txt',function(error){
    console.log(error);
});
*/

fs.rename('deneme2.txt','deneme1.txt',function(error){
    console.log(error);
});








































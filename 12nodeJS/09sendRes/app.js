
const http = require('http');
const fs = require('fs');
 

const server = http.createServer((req,res)=> {

    /*
    // res.setHeader('Content-Type','text/plain');
    // res.setHeader('Content-Type','application/json');
     res.setHeader('Content-Type','text/html');

    res.statusCode = 200;
    res.statusMessage = 'OKKK';




    // res.write('<html>');
    // res.write('<head><title>this title</title>');
    // res.write('<body>NodeJs server is here</body>');
    // res.write('</html>');

    // res.write(JSON.stringify({name:'samsung s7',price:3001}));
    // res.write('hello world')
    res.end();
    */
    fs.readFile('index.html', function(error,file){
        if(error){
            res.setHeader('Content-Type','text/plain');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.write('dosya bulunamadı');
            res.end();
        }else{
            res.setHeader('Content-Type','text/html');
            res.statusCode = 200;
            res.statusMessage = 'OKK';
            res.end(file);
        }
    })

});


// server.on('request', (req,res)=> {

// });
server.listen(3000);

console.log('listening ON PORT 3000');






























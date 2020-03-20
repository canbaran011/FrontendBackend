
const http = require('http');

const server = http.createServer((req,res)=>{
// console.log(req.url , req.method);

if(req.url === '/'){
    res.write('Hello World');
    res.end();
}
if(req.url === '/api/products'){
    res.write('product list');
    res.end();
}

});



// server.on('connection',function(){
//     console.log('new connection');
// })

server.listen(3000);
console.log('Server listening on PORT 3000');




























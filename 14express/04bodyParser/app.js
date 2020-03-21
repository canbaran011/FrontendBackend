const express = require('express');
const bodyParser = require('body-parser')


const app = express();


app.use(bodyParser.urlencoded({extended: false}))

app.get('/add-product',(req,res,next) =>{
 
    res.send(`
    <html>
    <head><title>add a new product</title></head>
    <body>
    <form action="product" method="POST">
    <input type="text" name="productName">
    <input type="submit" value="save pproduct">
    </form>
    </body>
    </html>

    `);
    
});

app.post('/product',(req,res,next) =>{
    //database e kayıt
     console.log(req.body);

res.redirect('/');


});

app.get('/',(req,res,next) =>{
    res.send('<h3> hello from expressJS </h3>')
});



 
app.listen(3000, ()=>{
    console.log('LISTENIN PORT 3000');
});















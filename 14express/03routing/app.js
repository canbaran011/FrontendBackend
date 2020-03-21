const express = require('express');

const app = express();

app.use('/',(req,res,next) =>{
    console.log('loglama yapıldı');
    next();//middleware
});

app.use('/add-product',(req,res,next) =>{
 
    res.send('<h3> adding product page </h3>')
    
});

app.use('/product-list',(req,res,next) =>{
   
    res.send('<h3> Product list page</h3>')
    
});

app.use('/',(req,res,next) =>{
    res.send('<h3> hello from expressJS </h3>')
});




app.listen(3000, ()=>{
    console.log('LISTENIN PORT 3000');
});











































const express = require('express');

const app = express();

app.use((req,res,next) =>{
    console.log('middleware 1 executed');
    next();
});
app.use((req,res,next) =>{
    console.log('middleware 2 executed');
    res.send('<h3> hello from expressJS </h3>')
});
app.use((req,res,next) =>{
    console.log('middleware 3 executed');
});



app.listen(3000, ()=>{
    console.log('LISTENIN PORT 3000');
});











































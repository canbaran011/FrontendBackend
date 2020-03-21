const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('hello express');
});

app.get('/api/products', (req,res) => {
    res.send('ürünler listelendi')
});


app.listen(3000, ()=>{
    console.log('LISTENIN PORT 3000');
});











































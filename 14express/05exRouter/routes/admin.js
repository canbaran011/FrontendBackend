const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req,res,next) =>{
 
    res.send(`
    <html>
    <head><title>add a new product</title></head>
    <body>
    <form action="/admin/add-product" method="POST">
    <input type="text" name="productName">
    <input type="submit" value="save pproduct">
    </form>
    </body>
    </html>

    `);
    
});

// /admin/add-product => POST
router.post('/add-product',(req,res,next) =>{
    //database e kayıt
     console.log(req.body);

res.redirect('/');


});








module.exports = router;


























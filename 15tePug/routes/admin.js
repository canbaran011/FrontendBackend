const express = require("express");
const router = express.Router();


const products = [
  {name:'samsung s8',price:3000,image:'1.jpg',description:'iyi telefonlardan'},
  {name:'samsung s7',price:2500,image:'2.jpg',description:'rh telefonlardan'},
  {name:'samsung s6',price:2400,image:'3.jpg',description:'sef telefonlardan'}
  
];


// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render('add-product' ,
  {
    title: 'Add Product',
    path: '/admin/add-product'
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  //database e kayıt
  // console.log(req.body);

  products.push({name: req.body.name , price: req.body.price, image:req.body.image, description: req.body.description});

  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products; //
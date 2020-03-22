
const Product = require('../models/product');


module.exports.getProducts = (req, res, next) => {
  const products = Product.getAll();
    res.render("admin/products", {
      title: "Admin Products",
      products: products,
      path : '/admin/products'
    });
  }


module.exports.getAddProduct = (req, res, next) => {

    res.render('admin/add-product' ,
    {
      title: 'New Product',

      path: '/admin/add-product'
    });
  }

 module.exports.postAddProduct =  (req, res, next) => {
    //database e kayıt

   const product = new Product(
     req.body.name,
    req.body.price,
    req.body.imageUrl,
    req.body.description
    );

    product.saveProduct();

    console.log(req.body);
    res.redirect("/");
  }

  module.exports.getEditProduct = (req, res, next) => {

    res.render('admin/edit-product' ,
    {
      title: 'Edit Product',

      path: '/admin/edit-product'
    });
  }

 module.exports.postEditProduct =  (req, res, next) => {
    
    res.redirect("/");
  }






// const products = [
//     {name:'samsung s8',price:3000,image:'1.jpg',description:'iyi telefonlardan'},
//     {name:'samsung s7',price:2500,image:'2.jpg',description:'rh telefonlardan'},
//     {name:'samsung s6',price:2400,image:'3.jpg',description:'sef telefonlardan'}

//   ];






















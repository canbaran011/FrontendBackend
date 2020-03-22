
const Product = require('../models/product');

module.exports.getIndex = (req, res, next) => {
  const products = Product.getAll();
    res.render("shop/index", {
      title: "Shopping",
      products: products,
      path : '/'
    });
  }


module.exports.getProducts = (req, res, next) => {
  const products = Product.getAll();
    res.render("shop/products", {
      title: "Products",
      products: products,
      path : '/products'
    });
  }


  module.exports.getProduct = (req, res, next) => {

    const product = Product.getById(req.params.productid);
    res.render('shop/product-detail',{
      title: product.title,
      product: product,
      path : '/products'
    });
res.redirect('/');

    }

  module.exports.getProductDetails = (req, res, next) => {
      res.render("shop/details", {
        title: "Details",
        path : '/details'
      });
    }


    module.exports.getCart = (req, res, next) => {
        res.render("shop/cart", {
          title: "Cart",
          path : '/cart'
        });
      } 


      module.exports.getOrders = (req, res, next) => {
          res.render("shop/orders", {
            title: "Orders",
            path : '/orders'
          });
        } 







// const products = [
//     {name:'samsung s8',price:3000,image:'1.jpg',description:'iyi telefonlardan'},
//     {name:'samsung s7',price:2500,image:'2.jpg',description:'rh telefonlardan'},
//     {name:'samsung s6',price:2400,image:'3.jpg',description:'sef telefonlardan'}
    
//   ];






























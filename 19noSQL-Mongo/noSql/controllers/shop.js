const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {

    Product.findAll()
        .then(products => {
            Category.findAll()
            .then(categories => {
                res.render('shop/index',{
                    title:'Shopping',
                    products : products,
                    categories:categories,
                    path:'/'
                });
            })
        })
        .catch((err) => {
            console.log(err);
        });

}

exports.getProducts = (req, res, next) => {

    Product.findAll()
        .then(products => {
            Category.findAll()
            .then(categories => {
                res.render('shop/products', {
                    title: 'Products',
                    products: products,
                    categories:categories,
                    path: '/products'
                });
            })
           
        })
        .catch((err) => {
            console.log(err);
        });

}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const model = [];

    Category.findAll()
        .then(categories => {
            model.categories = categories;
            return Product.findByCategoryId(categoryid);
        })
        .then(products => {
            res.render('shop/products', {
                title: 'Products',
                products: products,
                categories: model.categories,
                selectedCategory: categoryid,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        })


}

exports.getProduct = (req, res, next) => {
    Product.findById(req.params.productid)
        .then(product => {
            res.render('shop/product-detail', { 
                title: product.name,
                product: product,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });



    /*
     Product.findByPk(req.params.productid)
     .then((product) => {
         console.log(product);
        res.render('shop/product-detail', {
            title: product.name,
            product: product,
            path: '/products'
        });
    })
    .catch((err)=>{
        console.log(err);
    });
 */
}

exports.getCart = (req, res, next) => {

    req.user
        .getCart()
        .then(products => {
            console.log(products);
            res.render('shop/cart', {
                title: 'Cart',
                path: '/cart',
                products: products
            });
        })
        .catch(err => {
            console.log(err);
        });

}

exports.postCart = (req, res, next) => {

    const productId = req.body.productId;
    Product.findById(productId)
     .then(product => {
         return req.user.addToCart(product);
     })
     .then( () => {
         res.redirect('/cart');
     })
     .catch(err => {
         console.log(err);
     })
    
}

exports.getOrders = (req, res, next) => {

    req.user.getOrders()    //{include: ['products']} was inside getOrders func 
    .then(orders =>
        {
            // console.log(orders);
            res.render('shop/orders', {
                title: 'Orders',
                path: '/orders',
                orders:orders
            });
        })
    .catch(err =>{
        console.log(err);
    })
    
}

exports.postCartItemDelete = (req, res, next) => {
    const productid = req.body.productid;

    req.user
        .deleteCartItem(productid)
        .then(() => {
            res.redirect('/cart');
        });
     
}

exports.postOrder = (req, res, next) => {
    
    req.user
    .addOrder()
    .then(() =>{
        res.redirect('/cart');
    })
    .catch(err => {
        console.log(err);
    })

}



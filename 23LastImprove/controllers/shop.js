const Product = require('../models/product');
const Category = require('../models/category');
const Order = require('../models/order');

exports.getIndex = (req, res, next) => {
    // console.log(req.isAuthenticated);
    // console.log(req.cookies.isAuthenticated);
    console.log(req.session.isAuthenticated);

    Product.find()
        .then(products => {
            return products;
        }).then(products => {
            Category.find()
                .then(categories => {
                    res.render('shop/index', {
                        title: 'Shopping',
                        products: products,
                        path: '/',
                        categories: categories
                    });
                })
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
}

exports.getProducts = (req, res, next) => {
    Product
        .find()
        .then(products => {
            return products;
        }).then(products => {
            Category.find()
                .then(categories => {
                    res.render('shop/products', {
                        title: 'Products',
                        products: products,
                        path: '/',
                        categories: categories
                    });
                })
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const model = [];

    Category.find()
        .then(categories => {
            model.categories = categories;
            return Product.find({
                categories: categoryid
            });
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
            next(err);
        })
}

exports.getProduct = (req, res, next) => {

    Product
        .findById(req.params.productid)
        //.findOne({ name : 'Samsung S6', price: 2000 })
        .then(product => {
            res.render('shop/product-detail', {
                title: product.name,
                product: product,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
}

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            res.render('shop/cart', {
                title: 'Cart',
                path: '/cart',
                products: user.cart.items
            });
        }).catch(err => {
            console.log(err);
            next(err);
        });
}

exports.postCart = (req, res, next) => {

    const productId = req.body.productId;
    Product.findById(productId)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(() => {
            res.redirect('/cart');
        })
        .catch(err =>{
             console.log(err)
             next(err);
            });
}

exports.postCartItemDelete = (req, res, next) => {
    const productid = req.body.productid;
    req.user
        .deleteCartItem(productid)
        .then(() => {
            res.redirect('/cart');
        });
}

exports.getOrders = (req, res, next) => {

    Order
        .find({ 'user.userId': req.user._id })
        .then(orders => {
            console.log(orders);
            res.render('shop/orders', {
                title: 'Orders',
                path: '/orders',
                orders: orders
            });

        })
        .catch(err =>{
            next(err);
            console.log(err)});
}

exports.postOrder = (req, res, next) => {

    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            const order = new Order({
                user: {
                    userId: req.user._id,
                    name: req.user.name,
                    email: req.user.email
                },
                items: user.cart.items.map(p => {
                    return {
                        product: {
                            _id: p.productId._id,
                            name: p.productId.name,
                            price: p.productId.price,
                            imageUrl: p.productId.imageUrl
                        },
                        quantity: p.quantity
                    };
                })
            });
            return order.save();
        })
        .then(() => {
            return req.user.clearCart();
        })
        .then(() => {
            res.redirect('/orders');
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
}
    
   // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal)
    // lt (less than)
    // lte (less than or equal)
    // in (in)
    // nin (not in)

        // .find({price: {$eq:2000}})
        // .find({price: {$ne:2000}})
        // .find({price: {$gt:2000}})
        // .find({price: {$gte:2000}})
        // .find({price: {$lt:2000}})
        // .find({price: {$lte:2000}})
        // .find({price: {$in:[1000,2000,3000]}})
        // .find({price:{ $gte : 1000 , $lte : 3000} })
        // .or([{price: {$gte : 500 ,$lte:2000}}])

        //Samsung:

        //starts with
        // .find({ name : /^Samsung/})
        
        //end with 
        // .find({ name : /Samsung$/})  

        //contains anywhere
        // .find({name : /.*Samsung.*/})
///
            // req.user.
    // getOrders()    //{include: ['products']} was inside getOrders func 
///
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

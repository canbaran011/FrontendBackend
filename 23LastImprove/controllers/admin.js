const Product = require('../models/product');
const Category = require('../models/category');
const mongoose = require('mongoose');
const fs = require('fs');


exports.getProducts = (req, res, next) => {
    Product.find({ userId : req.user._id}) //userId: req.user._id
        .populate('userId', 'name -_id')
        .select('name price imageUrl userId')
        .then(products => {
            res.render('admin/products', {
                title: 'Admin Products',
                products: products,
                path: '/admin/products',
                action: req.query.action
            });
        })
        .catch((err) => {
            console.log(err);
        });


//.find({name: 'Iphone 6' , price: 2000 , }) .limit(10) .select({name:1 , price:1}) .sort({name:1})
}

exports.getAddProduct = (req, res, next) => {

    res.render('admin/add-product', {
        title: 'New Product',
        path: '/admin/add-product'
        // categories: categories
    }); 

}

exports.postAddProduct = (req, res, next) => {

    const name = req.body.name;
    const price = req.body.price;
    const image = req.file;
    const description = req.body.description;

   

    if(!image){
        return res.render('admin/add-product',{
            title: 'New Product',
            path: '/admin/add-product',
            inputs: {
                name:name,
                price: price,
                description: description
            }
        })
    }

    const product = new Product(
        {
            name: name,
            price: price,
            imageUrl: image.filename,
            description: description,
            userId: req.user
        }
    );
    product.save()
        .then(() => {
            // console.log(result);
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });


}

exports.getEditProduct = (req, res, next) => {

    Product.findOne ({ _id:req.params.productid, userId:req.user._id})
    // .populate('categories' , 'name -_id')
    .then(product =>{
        console.log(product);
        if(!product){
            return res.redirect('/');
        }
        return product;
    })
        .then(product => {

            Category.find()
            .then(categories => {

                categories = categories.map(category => {

                    if(product.categories){
                        product.categories.find(item => {
                            if(item.toString() === category._id.toString()){
                                category.selected = true;
                            }
                        })
                    }



                    return category;
                })

                res.render('admin/edit-product', {
                    title: 'Edit Product',
                    path: '/admin/products',
                    product: product,
                    categories:categories
                });
            })

            

        })
        .catch(err => {
            console.log(err);
        });


}

exports.postEditProduct = (req, res, next) => {

    // query first önce id seç sonra onu update et
    // update first id seçmeden direkt update sorgusunu yolla database e

    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const image = req.file;
    const description = req.body.description;
    const ids = req.body.categoryids; 

    // update first id seçmeden direkt update sorgusunu yolla database e

    Product.findOne({ _id: id, userId: req.user._id })
            .then(product => {
                if(!product){
                    return res.redirect('/');
                }
                product.name = name;
                product.price= price;
                product.description =description;
                product.categories =ids;

                if(image){
                    //resmi sil
                    fs.unlink('public/img/'+product.imageUrl,err => {
                        if(err){
                            console.log(err);

                        }
                    })
                    product.imageUrl= image.filename;
                }
                return product.save();
            })
            .then(result => {
                res.redirect('/admin/products?action=edit');

            })
            .catch(err => {
                next(err);
            });

}

exports.postDeleteProduct = (req, res, next) => {
    const id = req.body.productid;

    Product.findOne({ _id: id, userId: req.user._id } )
            .then(product => {
                if(!product){
                    return res.redirect('/');
                    //return next(new Error('silinmek istenen yok'))
                }
                fs.unlink('public/img/'+product.imageUrl,err => {
                    if(err){
                        console.log(err);

                    }
                });

                return Product.deleteOne({ _id: id, userId: req.user._id } )
            }).then((result) => {
                if(result.deletedCount === 0){
                    return res.redirect('/');
                }
                res.redirect('/admin/products?action=delete');
            })
            .catch(err => {
                next(err);
            }); 

}

exports.getAddCategory = (req, res, next) => {
    res.render('admin/add-category', {
        title: 'New Category',
        path: '/admin/add-category'
    });
}

exports.postAddCategory = (req, res, next) => {

    const name = req.body.name;
    const description = req.body.description;

    const category = new Category(
        {
            name: name,
            description: description
        }
    );

    category.save()
        .then(result => {
            console.log(result);
            res.redirect('/admin/categories?action=create');

        })
        .catch(err => {
            console.log(err);
        })


}

exports.getCategories = (req, res, next) => {
    Category.find()
        .then(categories => {
            res.render('admin/categories', {
                title: 'Categories',
                path: '/admin/categories',
                categories: categories,
                action: req.query.action
            });
        })
        .catch(err => {
            console.log(err);
        })

}

exports.getEditCategory = (req, res, next) => {
    Category.findById(req.params.categoryid)
        .then(category => {
            res.render('admin/edit-category', {
                title: 'Edit Category',
                path: '/admin/categories',
                category: category

            })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.postEditCategory = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;

Category.findById(id)
        .then(category => {
            category.name = name;
            category.description = description;
            return category.save();
        })
        .then(() =>{
            res.redirect('/admin/categories?action=edit');
        })
        .catch(err => {
            console.log(err);
        })
}

exports.postDeleteCategory = (req,res,next) => {

    const id = req.body.categoryid;

    Category.findOneAndDelete(id)
    .then(()=>{
        res.redirect('/admin/categories?action=delete');
    })
    .catch(err =>{
        console.log(err);
    })
}


// const prd = Product.build({
//     name: name,
//     price: price,
//     imageUrl: imageUrl,
//     description:description
// });
// prd.save()
// .then(result =>{
//     console.log(result);
//     res.redirect('/');
// })
// .catch(err => {
//     console.log(err);
// });


    /*
     Product.destroy({
         where: {id : id}
     }).then(()=> {
         res.redirect('/admin/products?action=delete');
     }).catch(err => {
         console.log(err);
     });*/
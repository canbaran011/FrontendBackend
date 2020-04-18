const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type:String,
        required:[true, 'You should enter product NAME'], //olayı dil bazında yönetmek errorMessages 
        minlength:[ 5, 'Name should be at least 5 character'],
        maxlength:255,
        lowercase: true, //database de her zaman küçük harfle kullanmak için 
        trim: true
    },
    price: {
        type: Number,
        required: function(){
            return this.isActive;
        },
        min: 0,
        max:[10000,"TOO Expensive max:10.000"],
        get: value => Math.round(value), // 10.2 => 10  || 10.8 => 11
        set: value => Math.round(value)
    },
    imageUrl : String,
    description : {
        type:String,
        minlength: [10, "Description should be at least 10 character" ]    
    },
    date : {
        type : Date,
        default : Date.now
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags:{
        type: Array, 
        validate : { //validate tamamlandıysa true , yoksa false döner...
            validator : function(value) {
                return value && value.length > 0;
            },
            message: 'Please input a tag for the product'
        }

    } // ['akıllı telefon']
    ,
    isActive: Boolean,
    categories: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
        }
    ]
});

module.exports =mongoose.model('Product',productSchema)  //database de products a çevrilir.






 
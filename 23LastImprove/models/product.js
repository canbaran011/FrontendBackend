const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type:String,
        required:[true, "Please enter a Name"],
        minlength:[ 5, "Minumum length should be 5 for Name"],
        maxlength: [50, "Maximum length should be 50 for Name"],
        trim : true
    },
    price: {
        type: Number,
        required: [true,"Please enter a Price" ],
        min :[ 0, "Minumum length should be 0 for Price"],
        max :  [100000, "Maximum length should be 100000 for Price"],
        get: value => Math.round(value),
        set: value => Math.round(value)
    },
    imageUrl : String,
    description :{
        type: String,
        minlength:[10, "Maximum length should be 10 for Name"],
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
    categories: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
        }
    ]
});

module.exports =mongoose.model('Product',productSchema)  //database de products a çevrilir.






 
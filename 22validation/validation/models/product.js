const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type:String,
        required:true,
        minLength: 3,
        maxLength: 30,
        lowercase: true,
        trim: true
    },
    price: {
        type: Number,
        required: function(){
            return this.isActive;
        },
        min: 0,
        max: 10000,
        get: value => Math.round(value),
        set: value => Math.round(value)
    },
    imageUrl : String,
    description :{
      type: String,
      minLength:10
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
    isActive: Boolean,
    tags:{
        type:Array,
        validate:{
            validator: function(value){
                return value && value.length > 0;
            },
            message: 'ürün için en az bir etiket girin.'
        }
    },
    categories: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        }
    ]
    /**
     * categories :[
     *  type : string;
     *  enum: ['telefon','b,lgisayar']
     * ]
     */
});

module.exports =mongoose.model('Product',productSchema)  //database de products a çevrilir.






 
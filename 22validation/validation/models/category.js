const mongoose = require('mongoose');

categorySchema = mongoose.Schema({
    name : {
     type: String,
     required: [true," Please input a category Name"],
     minlength: [5,"Name should be at least 5 character"]   
    },
    description:{ 
       type: String,
       required : [true , "Please give a description"],
       minlength: [10,"Description should be at least 10 character"]   

    }
});


module.exports = mongoose.model('Category', categorySchema);
const mongoose = require('mongoose');
const { isEmail } = require('validator');

const loginSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true , "Please Enter an Email"],
        validate: [isEmail, 'wrong  email']
    },
    password: {
        type: String,
        required:[ true , 'Please Enter a password']
    }
});


module.exports = mongoose.model('Login', loginSchema)
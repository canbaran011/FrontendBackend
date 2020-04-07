const mongoose = require('mongoose');
import isEmail from 'validator/lib/isEmail';

const loginSchema = mongoose.Schema({

    email: {
        type: String,
        validate: [isEmail, 'invalid email address']
    },
    password: {
        type: String,
        required: [true, 'need password']
    }
});

module.exports = mongoose.model('User', loginSchema)

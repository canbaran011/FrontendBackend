const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const accountRoutes = require('./routes/account');


const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);
const csurf = require('csurf');


const errorController= require('./controllers/errors');


const User = require('./models/user');
const ConnectionString = 'mongodb+srv://canbaran011:HWv3cg77CFqPz5kI@cluster0-neqnf.mongodb.net/node-app?retryWrites=true&w=majority';

var store = new mongoDbStore({
    uri: ConnectionString,
    collection: 'mySessions'

});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:false,
    store: store,
    cookie: { 
        maxAge: 3600000
    }
}));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req,res,next) => {

    if(!req.session.user){
        return next();
    } 

    User.findById(req.session.user._id)
    .then(user => {
        req.user = user;
        // console.log(req.user);
        next();
    })
    .catch(err => {
        console.log(err);
    })
})
app.use(csurf());

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);

app.use(errorController.get404Page);


mongoose.connect(ConnectionString)
    .then(() => {
        console.log('CONNECTED TO : MONGODB');
        app.listen(3000);

    })
    .catch(err => {
        console.log(err);
    })

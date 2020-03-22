const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const path = require('path'); 

const errorController = require('./controllers/errors');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','pug');
app.set('views','./views');


// routes
app.use('/admin',adminRoutes);
app.use(userRoutes);

app.set('title', 'My Site')
console.log(app.get('title'));  // "My Site"

app.use(errorController.get404Page);



/********************************** */
app.listen(3000, ()=>{
    console.log('LISTENIN PORT: 3000');
});


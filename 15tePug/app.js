const express = require('express');
const bodyParser = require('body-parser')
const admin = require('./routes/admin')
const userRoutes = require('./routes/user');
const path = require('path'); 


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','pug');
app.set('views','./views');


// routes
app.use('/admin',admin.routes);
app.use(userRoutes);

app.set('title', 'My Site')
console.log(app.get('title'));  // "My Site"

app.use((req,res) =>{
res.status(404).render('404',{title : 'PageNotFound'});
});



/********************************** */
app.listen(3000, ()=>{
    console.log('LISTENIN PORT 3000');
});


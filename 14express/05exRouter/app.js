const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

// routes
app.use('/admin',adminRoutes);
app.use('/admin',userRoutes);


/********************************** */
app.listen(3000, ()=>{
    console.log('LISTENIN PORT 3000');
});















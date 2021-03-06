const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user');
const path = require('path'); 

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));


// routes
app.use('/admin',adminRoutes);
app.use(userRoutes);

app.use((req,res) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});



/********************************** */
app.listen(3000, ()=>{
    console.log('LISTENIN PORT 3000');
});


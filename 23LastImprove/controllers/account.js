const User = require('../models/user');
const Login = require('../models/login');
const bcrypt = require('bcrypt');
const sgMail = require('@sendgrid/mail');
const crypto = require('crypto');


sgMail.setApiKey("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");

exports.getLogin = (req , res, next) => {

    var errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;

    res.render('account/login', {
        path: '/login',
        title: 'Login',
        errorMessage:errorMessage
    });
}

exports.postLogin = (req , res, next) => {
    
    const email = req.body.email;
    const password = req.body.password;

    const loginModel = new Login({
        email: email,
        password : password
    });

    loginModel
    .validate()
    .then( () =>{
        User.findOne({email:email})
    .then( user => {
        if(!user){
            req.session.errorMessage = "there is no such an account!";
            req.session.save(function(err){
                console.log(err);
                return res.redirect('/login');
            })
        }
        bcrypt.compare(password,user.password)
        .then(isSuccess => {
            if(isSuccess){
                //login
                req.session.user =user;
                req.session.isAuthenticated = true;
                return req.session.save(function(err){
                    var url = req.session.redirectTo || '/';
                    delete req.session.redirectTo;
                    console.log(err);
                    res.redirect(url);
                });

            }
            req.session.errorMessage = "Wrong email or password. Sorry can't tell which is wrong";
            req.session.save(function(err){
                console.log(err);
                return res.redirect('/login');
            }) 
               })
        .catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    })

    })
    .catch( (err) => {
        if(err.name == 'ValidationError'){
            let message = '';
            for(field in err.errors){
             message += err.errors[field].message + '<br>';
            }
            res.render('account/login', {
                path: '/login',
                title: 'Login',
                errorMessage:message
            });  
        }else{
            next(err);
        }
    });
    
}

exports.getRegister = (req , res, next) => {

    var errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;

    res.render('account/register', {
        path: '/register',
        title: 'Register',
        errorMessage:errorMessage
    });
}

exports.postRegister = (req , res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
    .then(user =>{
        if(user){
            req.session.errorMessage = "bu mail ile daha önce kayıt olunmuş !";
            req.session.save(function(err){
                console.log(err);
                return res.redirect('/register');
            }) 

        }

         return bcrypt.hash(password ,10);

    })
    .then(hashedPassword => {

        console.log(hashedPassword);
        
        const newUser = new User({
            name: name ,
            email : email,
            password:hashedPassword,
            cart :{ items : []}
        });
       return newUser.save();
    })
    .then( () => {
        res.redirect('/login');

        const msg = {
            to: email,
            from: 'info@canbaran.com',
            subject: 'Account Registered ! Thank You',
            html: '<h3>Your Account has been Created , Successfully !</h3> ',
          };
         sgMail.send(msg);

    })
    .catch(err => {
        if(err.name == 'ValidationError'){
            let message = '';
            for(field in err.errors){
             message += err.errors[field].message + '<br>';
            }
            res.render('account/register', {
                path: '/register',
                title: 'Register',
                errorMessage:message
            });  
        }else{
            next(err);
        }
    })

}

exports.getReset = (req , res, next) => {

    var errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;

    res.render('account/reset', {
        path: '/reset-password',
        title: 'Reset Password ',
        errorMessage:errorMessage
    });
}

exports.postReset = (req , res, next) => {

    const email = req.body.email;

    crypto.randomBytes(32 , (err,buffer) => {
        if(err){
            console.log(err);
            return res.redirect('/reset-password');
        }
        const token = buffer.toString('hex');
        // console.log(token); 
        User.findOne({email : email})
        .then( user => {
            if(!user){
                req.session.errorMessage = "böyle mail adresi yok !";
                req.session.save(function(err){
                    console.log(err);
                    return res.redirect('/reset-password');
                }) 
            }
            user.resetToken = token;
            user.resetTokenExpiration = Date.now()+3600000;

            return user.save();
        })
        .then(result => {
            res.redirect('/');

            const msg = {
                to: email,
                from: 'info@canbaran.com',
                subject: 'Password Reset',
                text: 'and easy to do anywhere, even with Node.js',
                html: `
                <p> Parolanızı güncellemek için linke tıklayın </p>
                <p>
                    <a href="http://localhost:3000/reset-password/${token}">ResetPassword</a>
                `
                ,
              };
             sgMail.send(msg);
        })
        .catch(err => {
            console.log(err);
        })

    })


}
 
exports.getLogout = (req, res, next ) => {

    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
        
    });


}

exports.getNewPassword = (req, res, next ) => {
    var errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;

    const token = req.params.token;

 User.findOne({resetToken : token, resetTokenExpiration:{
     $gt: Date.now()
 }}).then( user => {
   
    res.render('account/new-password', {
        path: '/new-password',
        title: 'New Password ',
        errorMessage:errorMessage,
        userId : user._id.toString(),
        passwordToken :token
    });
 }).catch(err => {
     console.log(err);
 })



}

exports.postNewPassword = (req, res, next ) => {

const newPassword = req.body.password;
const token = req.body.passwordToken;
const userId = req.body.userId;

User.findOne({
    resetToken: token ,
     resetTokenExpiration: {
        $gt: Date.now()
    },
    _id:userId
}).then( user => {
    _user= user;
    return bcrypt.hash(newPassword,10);
})
.then(hashedPassword => {
    _user.password = hashedPassword;
    _user.resetToken=undefined;
    _user.resetTokenExpiration= undefined;
    return _user.save();
})
.then(() => {
    res.redirect('/login');
})
.catch(err => {
    console.log(err);
})
}

/************************************************ */
/* POST LOGIN 
if ((email == 'email@gmail.com') && (password == '1234')){
        // req.isAuthenticated =true;
        //cookie : tarayıcıda bıraktığımız bilgi]
        // res.cookie('isAuthenticated', true)
        req.session.isAuthenticated = true; 
        res.redirect('/');
    } else {
        res.redirect('/login');
        req.isAuthenticated =false;
    }
    */
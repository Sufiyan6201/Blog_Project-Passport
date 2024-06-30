const express = require('express');
const path =require('path')
const db = require('./config/dataBs');
const router = require('./router/router');
const userRouter = require('./router/userRouter');
const passport = require('passport');
const expressSession = require('express-session');
const AuthDB = require('./controller/passport.controller');
const userAuth = require('./middleware/pass.middle');

AuthDB(passport)
const port = 8282;
const app = express();
app.set('view engine', 'ejs');
app.use("uploads", express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({secret:"key",resave:false,saveUninitialized:false}))
app.use(passport.initialize());
app.use(passport.session());

app.use(userRouter);
app.use(userAuth)
app.use(router);

app.listen(port, (err) => {
     if (!err) {
         db();
          console.log("Server is running on port http://localhost:8282 ")
     }
})


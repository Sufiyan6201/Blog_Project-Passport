const { Router } = require("express");
const { signup, insertUserData, loginPage, logout } = require("../controller/userControler");
const passport = require("passport");


const userRouter= Router();
userRouter.get('/signup',signup)
userRouter.get('/login',loginPage)
userRouter.get('/logout',logout)
userRouter.post('/login',passport.authenticate("local",{
     successRedirect: "/",
     failureRedirect: "/login"
}))
userRouter.post('/insertUserData',insertUserData)

module.exports=userRouter
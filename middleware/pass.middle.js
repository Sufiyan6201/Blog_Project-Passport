const userAuth = (req,res,next)=>{
     const user = req.user;
     console.log(user);
     if(user){
          next();
     }
     else{
         return res.redirect('/login');
     }
}
module.exports = userAuth;
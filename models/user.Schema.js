const mongoose=require('mongoose');
 const userSchema=new mongoose.Schema({
     username:String,
     email:String,
     password:String,
     phone:Number
 });
 const userDB = mongoose.model('userTable',userSchema);


 module.exports=userDB;
const userDB = require("../models/user.Schema");

const loginPage = (req, res) => {
     try {
          res.render('login')
     } catch (error) {
          console.log(error);
     }
}
const signup = (req, res) => {
     try {
          res.render('signup')
     } catch (error) {
          console.log(error);
     }
}
const insertUserData = async (req, res) => {
     const { username, email, password, phone } = req.body;

     try {
          await userDB.create({ username, email, password, phone });
          return res.redirect('/login')
     } catch (error) {
          console.log(error);
     }
}
const logout = async(req,res)=>{
  req.logout(()=>{
     return res.redirect("/login")
  })
}
module.exports = { loginPage, signup, insertUserData,logout }
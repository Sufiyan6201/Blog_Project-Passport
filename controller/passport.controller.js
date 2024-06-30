const userDB = require('../models/user.Schema')

const LocalStrategy = require('passport-local').Strategy
const AuthDB = (passport)=>{
     passport.use(new LocalStrategy(async(username,password,done)=>{
          try {
          const user = await userDB.findOne({username:username})
               if(!user){
                    return done(null,false)
               }
               if(password != password){
                    return done(null,false)
               }
               return done(null,user)
          } catch (error) {
               return done(error)
          }
     }));
       passport.serializeUser((user,done)=>{
        done(null,user.id)
    });
    passport.deserializeUser(async(id,done)=>{
        try {
            const user = await userDB.findById(id)
            done(null,user)
        } catch (err) {
            done(err,false)
        }
    });
}

module.exports=AuthDB
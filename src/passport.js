const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const userTable = require('./userTable');
const argon2 = require('argon2');

passport.use(new LocalStrategy(
  function(username, password, done) {
    userTable.user.findOne({ username: username })
    .then((user)=>{
      return argon2.verify(user.password, password)
    })
    .then((matched) => {
        if(matched){
            done(null,true);
        }
        else{
            done(null,false);
        }
    })
    .catch(error => {
        next(error)
    })
  }
));
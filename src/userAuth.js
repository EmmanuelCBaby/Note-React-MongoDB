const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const argon2 = require('argon2');
const userTable = require('./userTable');
const jwt = require('jsonwebtoken');
const passport1 = require('./passport');
const passport = require('passport')

app.use(passport.initialize());
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    next();
})

encryptPassword = (usern,passw) => {
    argon2.hash(passw)
    .then((pass)=>{
        userTable.addUser(usern,pass);
    })
    .catch((error)=>{
        console.log(error);
    });
}

registerHandler = (req,res) => {
    username = req.body.username;
    password = req.body.password;
    encryptPassword(username,password);
    console.log(" Register Request recieved");
    res.send("Successfully Registered");
}

loginHandler = (req,res) => {
    username = req.body.username;
    password = req.body.password;
    var token = jwt.sign({username,password},'ONEPIECE');
    console.log(token);
    res.send("Logged In Successfully");
}

app.post('/register',registerHandler);
app.post('/login', passport.authenticate("local", {session: false}), loginHandler);

app.listen(3001,()=>{
    console.log("Started server at PORT:3001")
})

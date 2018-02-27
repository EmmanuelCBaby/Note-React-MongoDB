const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const argon2 = require('argon2');
const userTable = require('./userTable');
const jwt = require('jsonwebtoken');
const passport1 = require('./passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const noteTable = require('./noteTable')

app.use(passport1.passport.initialize());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


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
    console.log("Register Request recieved");
    res.send("Successfully Registered");
}

loginHandler = (req,res) => {
    username = req.body.username;
    var token = jwt.sign({username},'ONEPIECE');
    userTable.user.findOneAndUpdate({username:username},{token:token})
    .then((obj)=>{
        console.log("Added Token");
    })
    .catch((error)=>{
        console.log(error);
    })
    res.clearCookie('token');
    console.log("Cleared previous cookie");
    res.cookie('token',token);
    res.send("Logged In Successfully");
}

// listHandler = (req,res) =>{
//     var token = req.cookies.token;
    
// }

addHandler = (req,res) => {
    var token = req.cookies.token;
    var title = req.body.title;
    var body = req.body.body;
    var decoded = jwt.verify(token,'ONEPIECE');
    var username = decoded.username;
    noteTable.data.create({username:username,title:title,body:body})
    .then((obj)=>{
        res.send('Added Note')
    })
}

removeHandler = (req,res) => {
    var token = req.cookies.token;
    var title = req.body.title;
    var decoded = jwt.verify(token,'ONEPIECE');
    var username = decoded.username;
    noteTable.data.create({username:username,title:title})
    .then((obj)=>{
        res.send('Removed Note')
    }) 
}

app.delete('/remove',removeHandler);
app.post('/add',addHandler);
// app.get('/list',listHandler);
app.post('/register',registerHandler);
app.post('/login', passport1.passport.authenticate("local", {session: false}), loginHandler);

app.listen(3001,()=>{
    console.log("Started server at PORT:3001")
})

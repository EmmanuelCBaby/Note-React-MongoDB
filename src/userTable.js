const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    token: String
});

const user = mongoose.model('users', userSchema);

addUser = (name, pass) => {
    user.create({ username: name, password: pass});
}

module.exports = {
    addUser,
    user
}
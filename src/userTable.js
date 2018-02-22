const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes');

const noteSchema = mongoose.Schema({
    username: String,
    password: String
});

const user = mongoose.model('users', noteSchema);

addUser = (name, pass) => {
    user.create({ username: name, password: pass});
}

module.exports = {
    addUser,
    user
}
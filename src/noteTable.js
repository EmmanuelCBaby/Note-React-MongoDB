const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes');

const noteSchema = mongoose.Schema({
    username: String,
    title: String,
    body: String
});

const data = mongoose.model('datas', noteSchema);

module.exports = {
    data
}
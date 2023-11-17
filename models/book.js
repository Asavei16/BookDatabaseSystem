const mongoose = require('mongoose');

let bookScheme = new mongoose.Schema({
    title : String,
    name : String,
    isbn : Number
});

module.exports = mongoose.model('Book', bookScheme);
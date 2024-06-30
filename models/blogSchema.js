const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
     username: String,
     date:String,
     image: String,
     dsc: String
})

const blogDB = mongoose.model('BlogTable', blogSchema);

module.exports = blogDB;
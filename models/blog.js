const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    'title':String,
    'author':String,
    'description':String,
})

const blogDetail = mongoose.model('Blog',blogSchema);

module.exports = blogDetail;
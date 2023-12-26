const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : String,
    imageUrl : String,
})

const Posts = mongoose.model('Post', postSchema)

module.exports = {
    Posts
}
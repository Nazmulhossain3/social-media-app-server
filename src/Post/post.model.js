const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : String,
    imageUrl : String,
    reactionsCount: { type: Number, default: 0 },
})

const Posts = mongoose.model('Post', postSchema)

module.exports = {
    Posts
}
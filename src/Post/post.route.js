const express = require('express');
const { createPost, getAllPost, getSinglePost, incrementPostReaction } = require('./post.controller');
const route = express.Router()

route.post('/createPost', createPost)
route.get('/getAllPost', getAllPost)
route.get('/singlePost/:id', getSinglePost)
route.put('/incrementReactions/:postId', incrementPostReaction)

module.exports = route
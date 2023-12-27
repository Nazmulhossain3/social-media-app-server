const express = require('express');
const { createPost, getAllPost, getSinglePost } = require('./post.controller');
const route = express.Router()

route.post('/createPost', createPost)
route.get('/getAllPost', getAllPost)
route.get('/singlePost/:id', getSinglePost)

module.exports = route
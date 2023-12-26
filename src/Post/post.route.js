const express = require('express');
const { createPost, getAllPost } = require('./post.controller');
const route = express.Router()

route.post('/createPost', createPost)
route.get('/getAllPost', getAllPost)

module.exports = route
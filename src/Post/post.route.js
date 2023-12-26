const express = require('express');
const { createPost } = require('./post.controller');
const route = express.Router()

route.post('/createPost', createPost)

module.exports = route
const express = require('express');
const { createAbout, getAllAbout } = require('./about.controller');
const route = express.Router()

route.post('/createAbout', createAbout)
route.get('/getAllAbout', getAllAbout)


module.exports = route
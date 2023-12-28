const express = require('express');
const { createAbout, getAllAbout, updateAbout } = require('./about.controller');
const route = express.Router()

route.post('/createAbout', createAbout)
route.get('/getAllAbout', getAllAbout)
route.put('/updateAbout/:id',updateAbout)


module.exports = route
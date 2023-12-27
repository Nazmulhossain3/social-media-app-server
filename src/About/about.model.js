const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    name : String,
    email : String,
    university : String,
    address : String

})

const Abouts = mongoose.model('About', aboutSchema)

module.exports = {
    Abouts
}
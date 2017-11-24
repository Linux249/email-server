const mongoose = require('mongoose')
const { Schema } = mongoose

conster userSchema = new Schema({
    googleID: String,
    name: String


})

mongoose.model('user', userSchema)

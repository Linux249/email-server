const express = require('express')
const mongoose = require('mongoose')
require('./src/services/passport')
const keys = require('config/keys')

mongoose.connect(keys.mongoURI)

const app = express()

// add routes
require('./src/routes/authRoutes')(app)

const PORT = process.env.PORT || 5000

console.log("Server Started - port " + PORT)
app.listen(PORT)

const express = require('express')
const mongoose = require('mongoose')
// import order (mongoose first) important!)
require('./model/User')   // if loaded here its usable over mongoose import (testing should be bedder this way)
require('./src/services/passport')
const keys = require('config/keys')

mongoose.connect(keys.mongoURI)

const app = express()

// add routes
require('./src/routes/authRoutes')(app)

const PORT = process.env.PORT || 5000

console.log("Server Started - port " + PORT)
app.listen(PORT)

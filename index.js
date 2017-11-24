const express = require('express')
const mongoose = require('mongoose')
require('./src/services/passport')

mongoose.connect(mongodb://@ds121336.mlab.com:21336/email-server)

const app = express()

// add routes
require('./src/routes/authRoutes')(app)

const PORT = process.env.PORT || 5000

console.log("Server Started - port " + PORT)
app.listen(PORT)

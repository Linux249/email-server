const express = require('express')

require('./src/services/passport')

const app = express()

// add routes
require('./src/routes/authRoutes')(app)

const PORT = process.env.PORT || 5000

console.log("Server Started - port " + PORT)
app.listen(PORT)
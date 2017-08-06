const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({hi: 'the world'})
})

const PORT = process.env.PORT || 5000

console.log("Server Started - port " + PORT)
app.listen(PORT)
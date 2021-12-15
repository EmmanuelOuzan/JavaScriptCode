// REST API SERVER CREATION ! YAY
const express = require('express');
const app = express()
const PORT = 3000

require('./router')(app)

// Accepting body and converting it to JSON.
// API works only with strings by
app.use(express.json())

// Exporting files:
// app.use(express.static('public'))

// port listening
app.listen(PORT, () => {
    console.log(` \n Person app listening at http://localhost:${PORT} : With great power...`)
})
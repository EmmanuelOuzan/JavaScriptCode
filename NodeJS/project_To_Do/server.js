const express = require('express');
const app = express();
const PORT = 1500

app.use(express.json())
require('./router')(app)

// Exporting files:
// app.use(express.static('public'))

// Accepting body and converting it to JSON.
// API works only with strings by

app.listen(PORT, () => {
    console.log(`TODO app listening at http://localhost:${PORT}`)
})
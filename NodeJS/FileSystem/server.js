const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
require('./router')(app)

app.listen(port, () => {
    console.log(`Drive app listening at http://localhost:${port}`)
})
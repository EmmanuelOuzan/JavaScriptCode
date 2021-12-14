const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Hello from express')
})

app.get('/hello', function (req, res) {
    const query = req.query
    console.log(query)
    res.send(`Hello ${query.name} ${query.lname}`)
})

const calc = require('./calc/calc')

app.get('/calc/:action/', function (req, res) {
    //query:  num1,num2,action
    const query = req.query
    const num1 = Number(query.num1)
    const num2 = Number(query.num2)
    //const action = req.params.action
    const { action = 'plus' } = req.params

    const result = calc[action](num1, num2)

    res.send(`Result: ${result}`)
})

app.post('/calc/:action', function (req, res) {
    const
        { num1, num2 } = req.body,
        { action } = req.params,

        result = calc[action](num1, num2)

    res.send(`Result: ${result}`)
})

app.listen(3000,
    () => console.log('server is running.. port: 3000'))



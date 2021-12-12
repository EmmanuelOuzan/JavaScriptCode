const express = require('express');
const { param } = require('express/lib/request');
const calc = require('../calc')

const app = express();
let port = 2000;
app.listen(2000,
    () => console.log(`server is running! port ${port}`))

app.get('/', function (req, res) {
    res.send('Hello World!!')
})
// Params
// const action = req.params.action;
// '/calc/:action/'
app.get('/calc', function (req, res) {
    const query = req.query;
    console.log(query)
    // console.log(action);
    const action = req.query.action;
    let result = 0;
    res.send(`num2  ${query.num1}  num1 :  ${query.num2} Result: ${calc[action](Number(query.num1), Number(query.num2))}`);
})
app.get('/hello', function (req, res) {
    const query = req.query;
    console.log(query)
    res.send(`hello ${query.name} MS. ${query.lastname}`);
    res.send('Hello World!!')
})
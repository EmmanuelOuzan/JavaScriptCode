const url = '/todo'
const files = require('./modules/index.js')
module.exports = (app) => {
    app.get(url, (req, res) => {
        res.send(files.read())
    })
    app.get(`${url}/:id`, (req, res) => {
        const {
            id
        } = req.params
        res.send(files.read(id))
    })
    // Creates a new to do list 
    app.post(url, (req, res) => {
        res.send(files.create(req.body))
    })
    // Change a current to do list 
    app.put(`${url}/:id`, (req, res) => {
        res.send(console.log(req.params))
    })
    app.delete(url, (req, res) => {
        res.send('Got a DELETE request at /todo')
    })
}

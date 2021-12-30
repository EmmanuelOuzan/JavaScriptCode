const url = '/Drive'
const drive = require('./drive')
module.exports = app => {

    app.get(`/`, (req, res) => {
        res.send('Drive')
    })
    app.get(`${drive}/list_files`, (req, res) => {
        const {
            
        }
        res.send(drive.list_files(req.params.path))
    })

    app.get(`${url}/createfolder/:folder_name`, (req, res) => {
        try {
            res.send(drive.create_directory(req.params.folder_name))
        } catch (error) {
            res.status(400)
            res.send(error)
        }
        
    })

    app.post(`${url}`, (req, res) => {
        res.send('Got a POST request')
    })

    app.put(`${url}`, (req, res) => {
        res.send('PUT')
    })

    app.delete(`${url}`, (req, res) => {
        res.send('DELETE')
    })
}


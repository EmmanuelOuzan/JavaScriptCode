// REST API SERVER CREATION ! YAY
const express = require('express');
const people = require('./modules/people');
const app = express()
const port = 4000

// Accepting body and converting it to JSON.
// API works only with strings by
app.use(express.json())
app.use(express.urlencoded())

// Exporting files:
app.use(express.static('public'))

// Getting the array of people
app.get('/person', (req, res) => {
    res.send(people.show_people())
})

// GET - Specific Person With Params
app.get('/person/:id', (req, res) => {
    const {
        id
    } = req.params;
    res.send(people.show_person(id));
})

// POST - Creation of a new person
app.post('/person', function (req, res) {
    // Old Option let person = people.person_creation(req.body.fname, req.body.lname, req.body.age, req.body.city, req.body.eyeColor);
    const {
        fname,
        lname,
        age,
        city,
        eyeColor
    } = req.body
    let person = people.person_creation(fname, lname, age, city, eyeColor);
    res.send(`Person has been created. \n ${JSON.stringify(person)}`);
})

// PUT - Update of a person
app.put('/person', function (req, res) {
    res.send('Got a PUT request at /person');
})

// DELETE - Delete a person
app.delete('/person/:id', function (req, res) {
    const {
        id
    } = req.params;
    people.delete_person(id);
    res.send('Got a delete request at /person ' + id);
})

// port listening
app.listen(port, () => {
    console.log(`Person app listening at http://localhost:${port}`)
})
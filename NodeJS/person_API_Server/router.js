const people = require('./modules/people');
const express = require('express');
const url = '/person'

const {
    body,
    validationResult
} = require('express-validator');


module.exports = (app) => {
    app.use(express.json())
    // Getting the array of people

    app.get(url, (req, res) => {
        res.send(people.show_people())
    })

    // GET - Specific Person With Params
    app.get(`${url}/:id`, (req, res) => {
        const {
            id
        } = req.params;
        try {
            res.send(people.show_person(id));
        } catch (error) {
            res.status(400);
            res.send(error)
        }
    })

    app.get(`${url}/search/:search_value`, (req, res) => {
        const {
            search_value
        } = req.params
        res.send(people.filterPerson(search_value));
    })


    // POST - Creation of a new person // Find a validation for EyeColor 
    app.post(url, body(['fname', 'lname', 'city']).isAlpha(), body('age').isNumeric(), function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            fname,
            lname,
            age,
            city,
            eyeColor
        } = req.body

        let person = people.create(req.body);
        res.send(`Person has been created. \n ${JSON.stringify(person)}`);
    })

    // PUT - Update of a person
    app.put(`${url}/:id`, body('property', 'value').isAlphanumeric(), function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            id
        } = req.params
        const {
            property,
            value
        } = req.body
        try {
            res.send(`Person Changed :${JSON.stringify(people.update(id, property, value))}`);
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    })


    // DELETE - Delete a person
    app.delete(`${url}/:id`, function (req, res) {
        const {
            id
        } = req.params
        try {
            res.send(`The Person with the ID of ${id} was deleted. \n ${JSON.stringify(people.delete_person(id))}`);
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    })

}

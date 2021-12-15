const people = require('./modules/people');
const url = '/person'
const {
    body,
    validationResult
} = require('express-validator');
module.exports = (app) => {

    // Getting the array of people
    app.get(url, (req, res) => {
        res.send(people.show_people())
    })

    // GET - Specific Person With Params
    app.get(`${url}/:id`, (req, res) => {
        const {
            id
        } = req.params;
        res.send(people.show_person(id));
    })



    // POST - Creation of a new person
    app.post(url, body(['fname', 'lname', 'city', 'eyeColor']).isAlpha(), body('age').isNumeric(), function (req, res) {
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

        let person = people.person_creation(fname, lname, age, city, eyeColor);
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
        res.send(`Person Changed :${JSON.stringify(people.update_person(id, property, value))}`);
    })


    // DELETE - Delete a person
    app.delete(`${url}/:id`, function (req, res) {
        const {
            id
        } = req.params
        let person_to_delete = people.delete_person(id);
        if (person_to_delete)
            res.send(`The Person with the ID of ${id} was deleted. \n ${JSON.stringify(person_to_delete)}`);
        else {
            res.send(`Person with ID ${id} dose not exist`);
        }
    })

}

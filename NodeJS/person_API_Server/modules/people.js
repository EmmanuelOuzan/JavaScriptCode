// Importing uniq_ID npm package
const uniq_ID = require('uniqid');
// Creation of an array of objects called people
const people = [];

const keys = {
    fname: 'string',
    lname: 'string',
    age: 'number',
    city: 'string',
    eyeColor: 'string'
}

function validate(data, mode) {
    // new array with the validated data
    const validateData = {}
    // looping over the wanted object
    for (const key in keys) {
        // If the mode is update it makes sure we have all the keys.
        if (mode != 'update') {
            if (!data[key])
                throw `key '${key}' is required`
        }
        // Handeling the age exception. Becuase HTTP recives only strings
        // Then we have to reformat it to number to make sure its a number.
        if (!isNaN(Number(data[key])))
            data[key] = Number(data[key])
        // Checks if the input is of the right type.
        if (typeof data[key] != keys[key])
            throw `key '${key}' must be of type '${keys[key]}'`
        // if passes all the tests - adds it to the new array
        validateData[key] = data[key]
    }
    return validateData
}

function create(newPerson) {
    // newPerson = validate(newPerson)
    newPerson.uniq_ID = uniq_ID();
    people.push(newPerson)
    return newPerson
}
// Creation Example 
let person1 =
{
    fname: 'Emmanuel',
    lname: 'Ouzan',
    age: '24',
    city: 'JLM',
    eyeColor: 'blue'
};
person1 = create(person1)

let person2 =
{
    fname: 'yossef',
    lname: 'gabay',
    age: '29',
    city: 'JLM',
    eyeColor: 'black'
};
person2 = create(person2);

function show_people() {
    return people;
}

function show_person(id) {
    const index = getPersonIndexById(id);
    if (index != -1) {
        return people[index];
    } else {
        throw `The Person with the ID: '${id}' was not found`
    }
}

function delete_person(id) {
    const index = getPersonIndexById(id);
    if (index != -1)
        return people.splice(index, 1);
    else
        throw `'Person with ID ${id} was not found'`;
}

function update(id, property, value) {
    const index = getPersonIndexById(id);
    if (index != -1) {
        people[index][property] = value;
        return people[index];
    }
    else
        throw `The Person with the ID: '${id}' was not found`;
}

// Internal function that is not exposed
function getPersonIndexById(id) {
    return people.findIndex(element => element.uniq_ID == id);
}

function filterPerson(search_value) {
    search_value = search_value.toLowerCase();
    return people.filter(p => `${p.fname} ${p.lname}`.toLowerCase().includes(search_value));
}

module.exports = {
    create,
    show_people,
    delete_person,
    show_person,
    update,
    filterPerson
};
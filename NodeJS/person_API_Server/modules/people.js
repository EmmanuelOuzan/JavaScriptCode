// const show_people = require('./show_people');

// Creation of an array of objects called people
let people = [];
let uniq_ID = 0;

function person_creation(fname, lname, age, city, eyeColor) {
    let person = {
        uniq_ID: uniq_ID,
        fname: fname,
        lname: lname,
        age: age,
        city: city,
        eyeColor: eyeColor
    };
    people.push(person);
    uniq_ID += 1;
    return person;
}

function show_people() {
    return people;
}

function show_person(id) {
    const location = people.findIndex(element => element.uniq_ID == id);
    if (location != -1) {
        return people[location];
    } else {
        return `The Person with the ID: '${id}' was not found`
    }
}

function delete_person(id) {
    let index = people.findIndex(element => element.uniq_ID == id);
    if (index != -1)
        return people.splice(index, 1);
    else
        return false
}
// Creation Example 
let person3 = person_creation('Amir', 'Barkol', 25, 'jlm', 'blue');
let person4 = person_creation('Amir2', 'Barkol2', 25, 'jlm', 'blue');

// To ask yossef how to import array between files

module.exports = {
    person_creation,
    show_people,
    delete_person,
    show_person
};
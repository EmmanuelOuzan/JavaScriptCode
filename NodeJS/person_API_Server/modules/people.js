const e = require("express");

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
// Creation Example 
person_creation('Emmanuel', 'Ouzan', 25, 'jlm', 'blue');
person_creation('Emmanuel2', 'Ouzan2', 25, 'jlm', 'blue');

function show_people() {
    return people;
}

function show_person(id) {
    const index = people.findIndex(element => element.uniq_ID == id);
    if (index != -1) {
        return people[index];
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

function update_person(id, property, value) {
    const index = people.findIndex(element => element.uniq_ID == id);
    if(index != -1){
        people[index][property] = value;
        return people[index];
    }
    else 
        return `The Person with the ID: '${id}' was not found`
}

// To ask yossef how to import array between files

module.exports = {
    person_creation,
    show_people,
    delete_person,
    show_person,
    update_person
};
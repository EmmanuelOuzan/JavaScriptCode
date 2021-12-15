// TO DO  :
// 1. Use the express-id package to generate ID
// 2. Change the else to generate an error
// 3. use more const then let DONE
// 4. Change the find Index to a function DONE

// let addRequestId = require('express-request-id')();
// Creation of an array of objects called people
const people = [];
let uniq_ID = 0;
const uniqid = require('uniqid'); 


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
    const index = getIndexbyID(id);
    if (index != -1) {
        return people[index];
    } else { // Throw
        return `The Person with the ID: '${id}' was not found`
    }
}

function delete_person(id) {
    let index = people.findIndex(element => element.uniq_ID == id);
    if (index != -1)
        return people.splice(index, 1);
    else // Throw
        return false
}

function update_person(id, property, value) {
    const index = getIndexbyID(id);
    if(index != -1){
        people[index][property] = value;
        return people[index];
    }
    else // Throw
        return `The Person with the ID: '${id}' was not found`
}

function getIndexbyID(id) {
    return people.findIndex(element => element.uniq_ID == id);
}


module.exports = {
    person_creation,
    show_people,
    delete_person,
    show_person,
    update_person
};
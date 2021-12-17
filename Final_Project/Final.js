// TO DO :
// Maybe return word instead of boolean in check input methods
// How to catch unexpected tokens?
// Check if there a token
// Check if string is not empty


// Continue:
// Make a while loop for input.
// I will be a JS Developer! Its not too late. We have a month to recap! :) 


// TO DO THE PROJECT AGAIN 
// Creation of object person

// TO DO 
// Create a function that gets an object and add its to the person array ! 
// Much better person creation + validation 

// Creation of an array of objects called people
let people = [];

const keys = {
    fname: 'string',
    lname: 'string',
    id: 'number',
    city: 'string',
    birthDate: 'string',
    parentID: 'number' //? date
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
    newPerson = validate(newPerson)
    people.push(newPerson)
    return newPerson
}

const person1 =
{

    fname: 'emmanuel',
    lname: 'ouzan',
    id: '321',
    city: 'jerusalem',
    birthDate: '08/08/92',
    parentID: '0' //? date

}
const person2 =
{

    fname: 'emmanuel',
    lname: 'ouzan',
    id: '321',
    city: 'jerusalem',
    birthDate: '08/08/92',
    parentID: '0' //? date

}
let new_person = create(person1);
let nperson2 = create(person2)

// Happy ! New creation! Why is it better again?

// Change of attribute
nperson2.city = "TLV";


// Operation on each of one of the people
people.forEach(v => console.log(v.birthDate));
people.forEach(person => console.log(person.id));



// Filters for something
// last name = Ouzan,  2. Where Emmanuel Exists
let check = people.filter(person => person.lname == 'ouzan');
let check2 = people.filter(element => element.fname == 'emmanuel');


// How to validate them one by one?
// The validation method is on all
function create_person() {
    let fname = prompt("Please enter your first name");
    validate_String(fname);
    let lname = prompt("Please enter your last name");
    validate_String(lname);
    let id = prompt("Please enter your ID");
    validate_Number(id);
    let city = prompt("Please enter your City");
    validate_String(city);
    let birthDate = prompt("Please enter you birthDate - format DD/MM/YY"); // To learn more about date in JS
    validate_date(birthDate);
    let parentID = prompt("Please enter your parent ID");
    validate_Number(parentID);
    let person_created = Person_creation(fname, lname, id, city, birthDate, parentID = 0);
    people.push(person_created);
    return person_created;
}

create_person();

function check_input(fname, lname, id, city, birthDate, parentID = 0) {
    validate_String(fname);
    validate_String(lname);
    validate_Number(id);
    validate_String(city);
    validate_date(birthDate);
    validate_Number(parentID);
}

// function add_person(fname, lname, id, city, birthDate, parentID = 0) {
//     let fname = prompt("Please enter your first name");
//     validate_String(fname);
//     let lname = prompt("Please enter your last name");
//     validate_String(lname);
//     let id = prompt("Please enter your ID");
//     validate_Number(id);


//     check_input(fname, lname, id, city, birthDate, parentID);
//     if (parentID != 0) {
//         if (people.forEach(person => console.log(person.id))) {

//         }
//     }
// }

function validate_Number(user_input) {
    for (i of user_input) {
        if (isNaN(i)) {
            console.log("Please enter an input without numbers");
            // Maybe return string // or go into a while loop
            return false;
        }
    }
    return true;
}

function validate_String(user_input) {
    for (i of user_input) {
        if (!isNaN(i)) {
            console.log("Please enter an input without letters");
            return false;
        }
    }
    return true;
}

function validate_date(date) {
    // TO DO 

}

function check_for_parent(parentID) {
    if (people.find(person => person.id == parentID)) {
        console.log("Parent found!");
    } else {
        console.log("No parent exists with that ID");
    }
}
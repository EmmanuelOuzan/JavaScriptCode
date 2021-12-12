// TO DO :
// Maybe return word instead of boolean in check input methods
// How to catch unexpected tokens?
// Check if there a token
// Check if string is not empty


// Continue:
// Make a while loop for input.
// I will be a JS Developer! Its not too late. We have a month to recap! :) 


// Creation of object person
function Person_creation(fname, lname, id, city, birthDate, parentID = 0) {
    let person = {
        fname: fname,
        lname: lname,
        id: id,
        city: city,
        birthDate: birthDate,
        parentID: parentID
    };
    return person;
}

// Creation Example 
let person1 = Person_creation('Emmanuel', 'Ouzan', '324320134', 'JLM', '08/08/1997', '0');
let person2 = Person_creation('Aviad', 'derli', '123', 'JLM', '08/02/1989', '0');
let person3 = Person_creation("Hana", 'lname', '321', 'BeitShemesh', '08/06/97', '324320134');
let person4 = Person_creation('Shlomi', 'Avinoam', '321', 'Jerusalem', '08/08/88', '123');

// Change of attribute
person2.city = "TLV";

// Creation of an array of objects called people
let people = [];

// Add the people to the array
people.push(person1);
people.push(person2);
people.push(person3);
people.push(person4);

// Operation on each of one of the people
people.forEach(v => console.log(v.birthDate));
people.forEach(person => console.log(person.id));



// Filters for something
// last name = Ouzan,  2. Where Emmanuel Exists
let check = people.filter(person => person.lname == 'Ouzan');
people.filter(element => element == 'Emmanuel');

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
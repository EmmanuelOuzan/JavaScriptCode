// TO DO :
// Maybe return word instead of boolean in check input methods
// How to catch unexpected tokens?
// Check if there a token
// Check if string is not empty



// Creation of object person
function Person_creation(fname, lname, id, city, birthDate, parentId = 0) {
    let person = {
        fname: fname,
        lname: lname,
        id: id,
        city: city,
        birthDate: birthDate,
        parentid: parentId
    };
    return person;
}

// Creation Example 
let person1 = Person_creation('Emmanuel', 'Ouzan', '324320134', 'JLM', '08/08/1997', '0');
let person2 = Person_creation('Aviad', 'derli', '123', 'JLM', '08/02/1989', '0');
let person3 = Person_creation("Hana", 'lname', '321', 'BeitShemesh', '08/06/97', 324320134);

// Change of attribute
person2.city = "TLV";

// Creation of an array of objects called people
let people = [];
// add the people to the array
people.push(person1);
people.push(person2);

// Operation on each of one of the people
people.forEach(v => console.log(v.birthDate));
people.forEach(person => console.log(person.id));



// Filters for something
// last name = Ouzan,  2. Where Emmanuel Exists
let check = people.filter(person => person.lname == 'Ouzan');
people.filter(element => element == 'Emmanuel');

function add_person(params) {
    let fname = prompt("Please enter your first name");
    let lname = prompt("Please enter your last name");
}
function check_input(fname, lname, id, city, birthDate, parentId = 0) {
    validate_String(fname);
    validate_String(lname);
    validate_Number(id);
    validate_String(city);
    validate_date(birthDate);
    validate_Number(parentId);
}

function add_person(fname, lname, id, city, birthDate, parentId = 0) {
    check_input(fname, lname, id, city, birthDate, parentId);
    if (parentId != 0) {
        if (people.forEach(person => console.log(person.id))) {

        }
    }
}

function validate_Number(user_input) {
    for (i of user_input) {
        if (!isNaN(i)) {
            console.log("Please enter an input without numbers");
            // Maybe return string
            return false;
        }
    }
    return true;
}

function validate_String(user_input) {
    for (i of user_input) {
        if (isNaN(i)) {
            console.log("Please enter an input without letters");
            return false;
        }
    }
    return true;
}
function validate_date(date) {
    // TO DO 

}

function check_for_parent(parentId) {
    if (people.find(person => person.id == parentId)) {
        console.log("Parent found!");
    }
    else {
        console.log("No parent exists with that ID");
    }
}
check_for_parent('123')
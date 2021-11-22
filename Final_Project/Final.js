// TO DO :
// Maybe return word instead of boolean in check input methods
// How to catch unexpected tokens?
// Check if there a token
// Check if string is not empty



// constructor of person 

function Person(fname, lname, id, city, birthDate, parentId = 0) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.city = city;
    this.birthDate = birthDate;
    this.parentId = parentId;
}

let person1 = new Person('Emmanuel', 'Ouzan', '123', 'JLM', '08/08/1997', '5');
let people = [];
people.push(person1);

// people.forEach(person => console.log(person.id)  );

let check = people.filter(person => console.log(person));

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

function check_input(fname, lname, id, city, birthDate, parentId = 0) {
    validate_String(fname);
    validate_String(lname);
    validate_Number(id);
    validate_String(city);
    // birthdate which format? 08/08/1a97 dd/mm/
    //const date1 = new Date('December 17, 1995 03:24:00');
    validate_Number(parentId);
}

function add_person(fname, lname, id, city, birthDate, parentId = 0) {
    check_input(fname, lname, id, city, birthDate, parentId);
    if (parentId != 0) {
        if (people.forEach(person => console.log(person.id))) {

        }
    }
}
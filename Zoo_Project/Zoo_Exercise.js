// Animals Database Solution - Zoo
let text1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let text2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
// connecting between the strings + lowering all letters + spliting
let animal_text = text1.concat(", ", text2).toLowerCase().split(', ');

let animals = [];
// Inserting the string into the array
// in a  format of code : animal
for (v of animal_text) {
    for (i in v) {
        if (!isNaN(v[i])) {
            animals[Number(v.slice(i))] = v.slice(0, i);
            break;
        }
    }
}


let user_choice = Number(prompt(`
Welcome to the animal_Database!
Please select an option to search for an animal:
[1] - search by animal Code
[2] - search by animal name
[3] - Add an animal
[4] - Delete an animal
`));
// To do : Add Try and Catch
switch (user_choice) {
    case 1:
        get_animal_by_code();
        break;
    case 2:
        get_animal_by_name();
        break;
    case 3:
        insert_animal();
        break;
    case 4:
        delete_animal_from_DB();
        break;
    default:
        console.log("Please enter a number between 1 - 4");
        break;
}

// All functions declarations 


function get_animal_by_code() {
    let code = prompt("Please enter an animal code");
    console.log(`Animal Code: ${code} 
      The name of the Animal is ${animals[code]}`);
    get_animal_by_name()
}

function get_animal_by_name() {
    let animal_input_name = prompt("Please enter an animal name");
    console.log(`Name to search ${animal_input_name}`);
    for (i in animals) {
        if (animals[i].includes(animal_input_name)) {
            console.log(`Name of the Animal: ${animals[i]}
            Animal Code that was found: ${i}`);
        }
    }
}

function insert_animal() {
    console.log("Lets add an animal!");
    let animal_name = prompt("Enter an animal name");
    let code = prompt("Enter a code for the animal");
    if (animals[code] != undefined) {
        console.log("The animal already exists! Aborting!")
    } else {
        console.log(`Adding animal with code ${code} & name ${animal_name} `)
        animals[code] = animal_name;
        console.log(animals)
    }

}


function delete_animal_from_DB() {
    let code = prompt("Enter a code for the animal");
    let rip_animal = animals[code];
    if (animals[code] != undefined) {
        delete animals[code];
        console.log(`The Animal with code ${code} was deleted RIP: ${rip_animal}`);
    } else {
        console.log("There is no such animal! Nothing has been deleted");
    }
}
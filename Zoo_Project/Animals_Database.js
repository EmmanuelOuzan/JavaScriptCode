// Animals Database Solution
let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"

// connecting between the strings
let animal_string = txt1.concat(txt2);

// Lowering all of the characters
animal_string = animal_string.toLowerCase();
animal_string = animal_string.match(/[a-zA-Z]+|[0-9]+/g);

// Creation of nessecary arrays
const animals = [];
const animal_codes_arr = [];
let letters_sum = "";

for (let i = 0; i < animal_string.length; i += 2) {
  animals[animal_string[i]] = animal_string[i + 1];
  animal_codes_arr[animal_string[i + 1]] = animal_string[i];
}
console.log(animals);
console.log(animal_codes_arr);


// maybe I can make it a switch? with a while?
// To do : Add Try and Catch
let user_choice = prompt(`
Welcome to the animal_Database!
Please select an option to look for an animal:
[1] - Look by animal Code
[2] - Look by animal name
`);

if (user_choice == 1)
  animal_name();
else if(user_choice == 2)
  animal_code();
else
  // should think about it work on it



function animal_name() {
  let code = prompt("Please enter an animal code");
  console.log(`Animal Code: ${code} 
    The name of the Animal is ${animal_codes_arr[code]}`);
    return animal_codes_arr[code];
}


function animal_code() {
  let name = prompt("Please enter an animal name");
  console.log(`Name of the Animal ${name}
    Animal Code that was found ${animals[name]}
    `);
    return animals[name];
}
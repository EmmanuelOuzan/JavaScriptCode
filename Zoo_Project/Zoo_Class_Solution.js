let text1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let text2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
let animal_text = text1.concat(", ", text2).toLowerCase().split(', ');
let animals = [];

for (v of animal_text) {
    for (i in v) {
        if (!isNaN(v[i])) {
            animals[Number(v.slice(i))] = v.slice(0, i);
            break;  
        }
    }
}


// All function declration 
const get_animal_by_code = () => {
    let code = prompt("Please enter an animal code");
    console.log(`Animal Code: ${code} 
      The name of the Animal is ${animals[code]}`);
      get_animal_by_name()
}
const get_animal_by_name = () => {
    let animal_input_name = prompt("Please enter an animal name");
    for (i in animals) {
        console.log(i)
        if (animals[i] == animal_input_name) {
            break;
        }
    }
    console.log(`Name of the Animal : ${animal_input_name}
      Animal Code that was found : ${i} 
      `);
}


let user_choice = Number(prompt(`
Welcome to the animal_Database!
Please select an option to search for an animal:
[1] - search by animal Code
[2] - search by animal name
[3] - Add an animal
[4] - Delete an animal
`));

switch (user_choice) {
    case 1:
        get_animal_by_code();
        break;
    case 2:
        get_animal_by_name();
        break;
    default:
        break;
}


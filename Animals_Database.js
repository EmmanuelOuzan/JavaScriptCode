
let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6".toLowerCase();
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14".toLowerCase();
txt1 = txt1.match(/[a-zA-Z]+|[0-9]+/g);
txt2 = txt2.match(/[a-zA-Z]+|[0-9]+/g);
const keys = [];
const values = [];
for(let i = 0; i < (txt1.length + txt2.length); i++){
    keys[i] = txt1[i]
    values[i] = txt1[i]
}
console.log(keys)
console.log(values)


const animals_by_name = [];
for(let i = 0; i < txt1.length; i++){
  console.log(txt1[i]);
  animals_by_name.push(txt1[i])
}

// let first_array = txt1.split(", ");
// let second_array = txt2.split(", ");


// for (let i = 0; i < first_array.length; i++) {
//   first_array[i] = first_array[i].toLowerCase();
//   second_array[i] = second_array[i].toLowerCase();  
// }
// console.log(first_array);
// console.log(second_array);
// first_array.
// const numberArray = { "Dog": 12, "Cat": 3 };
//     let user_choice = prompt(`
// Welcome to the animal_Database!
// Please select an option to look for an animal:
// [1] - Look by animal Code
// [2] - Look by animal name
// `);
user_choice = 1;
if (user_choice == 1) {
    let code = prompt("Please enter an animal code");
    console.log(`Animal Code: ${code} 
    The name of the Animal is ${}`
    );
}
else if (user_choice == 2) {
    let name = prompt("Please enter an animal name");
}
else {

}

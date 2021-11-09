// 1.
let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6".toLowerCase();
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14".toLowerCase();
txt1 = txt1.replace(", ",":");
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

//2.

let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6".toLowerCase();
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14".toLowerCase();
txt1 = txt1.match(/[a-zA-Z]+|[0-9]+/g);
txt2 = txt2.match(/[a-zA-Z]+|[0-9]+/g);

const animals_by_name = [];
for(let i = 0; i < txt1.length -1; i++){
  animals_by_name[i] = txt1[i];
  animals_by_name[i+1] = txt1[i+1];
}
console.log(animals_by_name)

const animals_by_number = [];
for(let i = 0; i < txt1.length -1; i++){
  //animals_by_number[i] = txt1[i];
  animals_by_number[i] = txt1[i + 1];
}
animals_by_number
let user_choice = prompt(`
Welcome to the animal_Database!
Please select an option to look for an animal:
[1] - Look by animal Code
[2] - Look by animal name
`);
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



// // Creation of both arrays with animal_string
// for(let i = 0; i < animal_string.length; i++){
//   letters_sum += animal_string[i];
//   if(!isNaN(animal_string[i + 1]) && !isNaN(animal_string[i + 2])){
//     animal_names_arr[letters_sum] = animal_string[(i + 1)] + animal_string[(i + 2)];
//     animal_codes_arr[animal_string[(i+1)] + animal_string[(i + 2)]] = letters_sum;
//     i++;i++;
//     letters_sum = "";
//   }
//   else if(!isNaN(animal_string[i + 1])){
//     animal_names_arr[letters_sum] = animal_string[(i + 1)];
//     animal_codes_arr[animal_string[(i + 1)]] = letters_sum;
//     i++;
//     letters_sum = "";
//   }
//   else{
//     continue;
//   }
// }
// // console.log(animal_names_arr);
// console.log(animal_codes_arr);

    
    
    
// txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
//txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"
    
















// // Creation of both arrays with animal_string
// for(let i = 0; i < animal_string.length; i++){
//   letters_sum += animal_string[i];
//   if(!isNaN(animal_string[i + 1]) && !isNaN(animal_string[i + 2])){
//     animal_names_arr[letters_sum] = animal_string[(i + 1)] + animal_string[(i + 2)];
//     animal_codes_arr[animal_string[(i+1)] + animal_string[(i + 2)]] = letters_sum;
//     i++;i++;
//     letters_sum = "";
//   }
//   else if(!isNaN(animal_string[i + 1])){
//     animal_names_arr[letters_sum] = animal_string[(i + 1)];
//     animal_codes_arr[animal_string[(i + 1)]] = letters_sum;
//     i++;
//     letters_sum = "";
//   }
//   else{
//     continue;
//   }
// }
// // console.log(animal_names_arr);
// console.log(animal_codes_arr);

    
    
    
// txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6"
//txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14"
    

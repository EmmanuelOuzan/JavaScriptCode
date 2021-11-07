// First Assignment
// INPUT : A list of fruits
// Output : A list of fruits + UpperCase + length
const fruit_list =  "applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs";
const new_list = fruit_list.split(", ");

for(let i=0;i < new_list.length; i++){
    new_list[i] = new_list[i].toLowerCase();
    new_list[i] = new_list[i].charAt(0).toUpperCase() + new_list[i].slice(1);
}
console.log(new_list)
for(let i=0; i < new_list.length; i++){
  console.log(new_list[i] + "|" + new_list[i].length);
}

// Second Assignment

let pcString = "Emmanuel";
let guesses = 4;
let sucssesRate = 0;

while(guesses > 0){
    let user_guess = prompt("Please guess a character!").toLowerCase();
    if(user_guess.length != 1){
        console.log("Out!");
        continue;
    }
    if(pcString.toLowerCase().includes(user_guess)){
        sucssesRate++;
        guesses--;
        console.log("Success!");
       continue;
    }
    console.log(`one guess wasted ${guesses} left`);
    guesses--;
}
console.log(`Your sucssess rate is ${sucssesRate}/4`);

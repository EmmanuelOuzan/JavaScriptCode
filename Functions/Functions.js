// 1.
function calc(num1, num2) {
    return (num1 + num2);
}
// 2.
let arr = [];
let exit = false;
do {
    user_choice = Number(prompt(`
    Hello and welcome dear user! :) 
    [1] - To create a new array
    [2] - To calculate the sum of the created array.
    [3] - Exit the program.
    `));

    switch (user_choice) {
        case 1:
            arr = array_creation(Number(prompt("enter the size of the array")));
            break;
        case 2:
            console.log(total(arr));
            break;
        case 3:
            console.log("The program has terminated succsefuly");
            exit = true;
            break;
        default:
            console.log("Please enter a valid number, 1/2/3");
            break;
    }
} while (!exit);

// Creates an Array!
function array_creation(size) {
    const arr = new Array(size);
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

// Sums up the values of the array.
function total(arr) {
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum = calc(sum,arr[i]);
    }
    return sum;
}
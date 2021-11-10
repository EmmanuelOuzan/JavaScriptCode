// 1. Finding the biggest number
let userNum = prompt("Enter a number");
let num = 4;

if (userNum > num) {
    console.log("The user number is bigger then my number");
} else if (num < userNum) {
    console.log("THe user number is smaller");
} else {
    console.log("The numbers are equal!");
}

// 2. With If: Finding the biggest number
let a = prompt("Enter the first num");
let b = prompt("Enter the second num");
let c = prompt("Enter the third num");

if (a > b) {
    if (a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else {
    if (c > b) {
        console.log(c);
    } else {
        console.log(b);
    }
}

//2. With Array
numbers = [prompt("FirstNum"), prompt("SecondNum"), prompt("ThirdNum")]
Math.max(...numbers)

// 3.
let user = "Admin"
let password = "TheMaster"
if (user == "Admin") {
    if (password == "TheMaster") {
        console.log("Welcome!")
    } else if (password == "Cancel") { // Cancel 
        console.log("Canceled")
    } else {
        console.log("Wrong password!")
    }
} else if (user == "Cancel") {
    console.log("Canceled")
} else {
    console.log("I don't know you")
}

// 4.

let tip = 0;
let paycheck = Number(prompt("What is the paycheck?"));
if (paycheck > 50 && paycheck < 200) {
    tip = (paycheck / 100) * 15;
} else {
    tip = (paycheck / 100) * 20;
}
console.log(`The payment was: ${paycheck} The tip was: ${tip} The total is ${paycheck + tip}`)


// || brings back the first True. - If there is no true, brings back the last value
// && Brings back the first Flase. - If there is no false, brings back the last value
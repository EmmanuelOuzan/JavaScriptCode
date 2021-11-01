// 1.
let userNum = prompt("Enter a number");
let num = 4;

if (userNum > num){
    console.log("The user number is bigger then my number")
}
else if(num < userNum){
    console.log("THe user number is smaller")
}
else{
    console.log("The numbers are equal!")
}

// 2. With If:
let num1 = prompt("Enter the first num")
let num2 = prompt("Enter the second num")
let num3 = prompt("Enter the third num")

if(num1 > num2 && num1 > num3){
    console.log(num1)
}
if (num2 > num1 && num2 > num3){
    console.log(num2)
}
if (num3 > num1 && num3 > num2){
    console.log(num3)
}

//2. With Array
numbers = [prompt("FirstNum"),prompt("SecondNum"),prompt("ThirdNum")]
Math.max(...numbers)

// 3. 
let user = "Admin"
let password = "TheMaster"

if(user == "Admin"){
    if(password == "TheMaster"){
        console.log("Welcome!")
    }
    else if(password == "Cancel"){
        console.log("Canceled")
    }
    else{
        console.log("Wrong password!")
    }
}
else if(user == "Cancel"){
    console.log("Canceled")
}
else{
    console.log("I don't know you")
}

// 4.
 
let paycheck = Number(prompt("What is the paycheck?"))
let tip;
if (paycheck > 50 && paycheck < 200){
    tip = (paycheck/100) * 15;
}
else{
    tip = (paycheck/100) * 20;
}
let total = paycheck + tip
console.log(total)
console.log("The payment was:" + paycheck + " The tip was: "+ tip + " The total is:" + total)
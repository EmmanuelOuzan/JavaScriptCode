let light = prompt("What is the traffic light color?")
// classic way
if (light == "red") {
    console.log("You shall not pass!!")
}
if (light == "green") {
    console.log("Go GO GO!")
}
if (light == "orange") {
    console.log("Go quick, or stop!")
}
// short statment 
let light = prompt("What is the traffic light color?")
let output = (light == "red") ? "not pass!" : (light == "green") ? "Go!" : (light == "orange") ? "get_ready" : "Wrong word";
console.log(output)


// ctrl + ? to comment out
// 1.  כתבו תוכנית המדמה רמזור.
// קלטו צבע והדפיסו בהתאם .



let light = prompt("What is the traffic light color?");

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

// short statment - Short IF
let light = prompt("What is the traffic light color?");
let output = (light == "red") ? "not pass!" : (light == "green") ? "Go!" : (light == "orange") ? "get_ready" : "Wrong word";
console.log(output)

// 2. כתבו תוכנית המדמה חיישן מהירות.
// קלטו מהירות של המכונית והדפיסו:
// עד 40 - סע כבר!
// עד 80 - נסיעה טובה!
// עד 120 - האט!
// מעל - עצור מיד!

let speed = 120;

let speed_result = (speed <= 40) ? "GO GO!" : 
(speed > 40 && speed <= 80) ? "Have a good ride" :
(speed > 80 && speed <= 120) ? "Slow down!" : 
(speed >= 120) ? "Stop Now!" 
: "Wrong speed";
console.log(speed_result);

let a = 7;
let b = 10;
let c = 9;
let new_biggest = (a > b) ? (a > c) ? `a : ${a} is the biggest` : `c :${c} is the biggest` : (b > c) ? `b: ${b} is the biggest` : 'c';
console.log(new_biggest);

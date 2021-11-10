let username = prompt("Enter username")
let firstName = prompt("FirstName")
let familiyName = prompt("Enter Familiy Name")

// Priority of the booleans
// The first to be true will be printed. Else - Anonymous 
console.log("Hello! " + (username || firstName || familiyName || "Anonymous!"))


// Challenge
// Extra - Using time function
setTimeout(function(){ alert("1"); alert("2"); alert("3") }, 3000);

// Using Only OR. (The solution)
alert(1) || alert(2) || alert(3)   
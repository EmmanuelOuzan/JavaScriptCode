// Priority of the vbooleans
let username = prompt("Enter username")
let firstName = prompt("FirstName")
let familiyName = prompt("Enter Familiy Name")

console.log("Hello! " + (username || firstName || familiyName || "Annoymous!"))

// Challenge
setTimeout(function(){ alert("1"); alert("2"); alert("3") }, 3000);
alert(1) || alert(2) || alert(3)   
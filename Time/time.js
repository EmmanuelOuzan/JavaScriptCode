// Number(prompt("How many times do you want it to run?"));
let interval = 2;
function runMe(num) {
    alert(`hello ${num}`)
}
let counter = 0;
let st = setInterval(() => {
    runMe(counter); 
    console.log(counter);
    counter++;
    if(counter == interval){
        clearInterval(st);
    }
}, 2000);

// Sets time out after x seconds
setTimeout(() => {
    alert("hello from the other side")
}, 2000);
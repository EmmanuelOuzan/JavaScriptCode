// בס''ד

// Creation of generic function 
// Gets a question, yes function and no function.
// The function will call each function, according to the confirmation
function question(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}

question("Are you happy?", yes, no);
question("Is it sunny today?", yes_sunny, no_sunny);
question("Is the pool open today?", );


function yes() {
    alert("Yes is great! :)");
}

function no() {
    alert("Oh no! :( ");

}

function yes_sunny() {
    alert("Yay! lets go to the beach!");
}

function no_sunny() {
    alert("oh crap.. let stay at home");
}

function pool_open() {
    alert("Lets go to the pool!");
}

function pool_closed() {
    alert("oh no the pool is closed.. lets stay at home");
}
let counter = 0;

function add() {
    counter++;
    document.getElementById('spn').innerText = counter;
}
function decrease() {
    counter--;
    document.getElementById('spn').innerText = counter;
}

function general(button) {
    if (button.dataset.type == "+") {
        document.getElementById('spn').innerText = ++counter;
    }
    else if (button.dataset.type == '-') {
        document.getElementById('spn').innerText = --counter;
    }
}

let r = document.getElementById('range')
r.value
document.getElementById('spn').innerText = r.value;

function update() {
    document.getElementById('spn').innerText = r.value;
}
function compare() {
    if (document.getElementById('range_random').value == document.getElementById('guess').value) {
        document.getElementById('result').innerText = 'right!';
    }
    else {
        document.getElementById('result').innerText = 'wrong!';
    }
}













// let item = {
//     'name' : "milk",
//     'price': 9
// }
// item.milk.price
// [item,item ]
// typeof(items);
// items[0]
// Super market
let total_price = 0;
let items = {
    'milk': 5.5,
    'bread': 10,
    'milki': 4,
    'cheese': 22
};


let div = document.getElementById('items');
let li = document.createElement('li');
let ul = document.getElementById("items").appendChild(document.createElement('ul'));
ul.setAttribute('id', 'ul');
for (i in items) {
    ul.innerHTML += `<li> <b>Item:</b>  ${i}  | <b> Price </b>  ${items[i]} </li> <br>`
}

function add_item(item, price) {
    localStorage.setItem(item, price)
}
add_item('cookies',10);
localStorage.DB = JSON.stringify(items);
let list = JSON.parse(localStorage.DB);
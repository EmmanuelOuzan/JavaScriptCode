// A function to create Items :
// creating an object with name and price
function create_item(name, price) {
    return {
        name: name,
        price: price,
    }
}
// Example of the usage of the items creation
create_item('milk', 5);
create_item('bread', 10);

// Create an array of objects 
let items = [
    create_item('milk', 5.5),
    create_item('meat', 150),
    create_item('milki', 3.5),
]
// Adding the list item to the localstorage
localStorage.items_list = items;

// Now we have objects in the localstorage but we should keep it in JSON to use it well.
localStorage.items_list = JSON.stringify(items_list);

// Now to extract the data I will use JSON.parse() and then refernce it.
localStorage.items_list = JSON.parse(items_list);



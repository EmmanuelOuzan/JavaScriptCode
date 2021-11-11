// Creating an array with 10 slots
const numbers_array = new Array(10);

// Filling the array with random numbers between 1 - 1000
for (let i = 0; i < numbers_array.length; i++) {
    numbers_array[i] = (Math.floor(Math.random() * 1000));
}
numbers_array.push(770);
// Filtering the array find the numbers that are bigger then 100
let numbers_bigger_then_100 = numbers_array.filter(item => item > 100);

// returns the length of the numbers in the array
const map1 = numbers_array.map(number => number.toString().length);

// prints the numbers that their length is bigger then 2.
const map2 = map1.filter(num => num > 2);

// Prints if the number 770 exists
const filter_770 = numbers_array.find(num => (num == 770));

// ? How to make it better?
if (filter_770 == 770){
    console.log("770 exists!");
}
else{
    console.log("770 was not found");
}
// // Old fashion way :) 
// for (num of map1) {
//     if (num > 2)
//         console.log(num);
// }
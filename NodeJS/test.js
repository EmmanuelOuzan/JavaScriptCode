const calc = require('./calc');
// for 
console.log(calc.division(10,2));

for (operation in calc){
    console.log(operation(2,2));
}

function calcAll(x, y) {
    for (const key in calc){
        console.log(`${key}: ${calc[key](x,y)}`);
    }
}

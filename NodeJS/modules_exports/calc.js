const plus = require('./plus');
const minus = require('./minus');
const multiply = require('./multiply');
const division = require('./division');

module.exports = { plus, minus, multiply, division };


function calcAll(x, y) {
    for (const key in calc){
        console.log(`${key}: ${calc[key](x,y)}`);
    }
}

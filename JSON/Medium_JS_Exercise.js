(num) => num + 5;
function addFive (num) {
    return num + 5;
};


console.log(addFive(10))

function getOpposite(num) {
    if (isNaN(num)){
        return num[0] * -1 | 0
    }
    return (num * -1) | 0
}

console.log(getOpposite('5b'));
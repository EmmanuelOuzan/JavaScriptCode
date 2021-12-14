let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
nums.forEach(element => total += element);

let total2 = 0;
for (const num of nums)
    total2 += num;

console.log(total2);

let highest = 0;
let lowest = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.reduce((highest, curr) => highest < curr ? highest = curr : 0, arr[0]);
arr.reduce((lowest, curr) => lowest > curr ? lowest = curr : curr, arr[0]);
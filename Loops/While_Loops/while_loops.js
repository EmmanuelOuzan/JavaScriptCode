// 1. כתבו תוכנית שמדפיסה בדיוק כך :
//  * 
//  * * 
//  * * * 
//  * * * * 
//  * * * * * 

let star = "*";
let count = 0;
while (count != 5) {
    console.log(star);
    star = star + "*";
    count++;
}

// בונוס - קלטו מספר והדפיסו את השרטוט הנ"ל באורך שורות כמו המספר שקיבלתם,
// לדוגמא : 3 >>
//  * 
//  * * 
//  * * * 

let size = prompt("Enter the size of the stars");
while (count != size) {
    console.log(star);
    star = star + "*";
    count++;
}


// 2. הדפיסו את האות Z
// מצ"ב צילום פלט סופי.
// double loop  - later


let c = "*", count = 8;
let lineBorder = "", counter = 0;

// for first and last line
while (counter < count) {
    lineBorder += c // lineBorder =  lineBorder + c
    counter++
}
console.log(lineBorder);

let lines = count - 2;
while (lines >= 1) {
    let space = "", counter = 0;
    while (counter < lines) {
        space += " "
        counter++;
    }
    console.log(space + c);
    lines--;
}

console.log(lineBorder);
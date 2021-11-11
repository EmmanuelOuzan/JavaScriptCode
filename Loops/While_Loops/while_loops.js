// 1. כתבו תוכנית שמדפיסה בדיוק כך :
//  * 
//  * * 
//  * * * 
//  * * * * 
//  * * * * * 



// בונוס - קלטו מספר והדפיסו את השרטוט הנ"ל באורך שורות כמו המספר שקיבלתם,
// לדוגמא : 3 >>
//  * 
//  * * 
//  * * * 



// 2. הדפיסו את האות Z
// מצ"ב צילום פלט סופי.
// double loop  - later

// Z 
let size = 5;
let counter = 1;
let starnum = 1;
while (counter <= size) {
    while (starnum <= size) {
        console.log("*")
        starnum++;
    }
    counter++;
}

// solution
// // TO do later : 
// let c = "*", num = 8;
// let lineBorder = "", counter = 0;

// // for first and last line
// while (counter < num) {
//     lineBorder += c // lineBorder =  lineBorder + c
//     counter++
// }
// console.log(lineBorder);

// let lines = num - 2;
// while (lines >= 1) {
//     let space = "", counter = 0;
//     while (counter < lines) {
//         space += " "
//         counter++;
//     }
//     console.log(space + c);
//     lines--;
// }

// console.log(lineBorder);
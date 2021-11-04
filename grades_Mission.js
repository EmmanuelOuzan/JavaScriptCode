// use of while loops
let grade = prompt("Please enter your Grade")

while (isNaN(grade) || grade < 0 || grade > 100) {
    grade = prompt("Please enter a correct Grade!")
}

let num_of_students = 0;
let avarage = 0;
let highest = 0;
let lowest = 100;

while (grade != "exit") {
    num_of_students++;
    grade = Number(grade);
    avarage += grade;
    if (grade > highest) {
        highest = grade;
    }
    if (grade < lowest) {
        lowest = grade;
    }
    grade = prompt("Please enter your Grade")
    if (grade != "exit") {
        while (isNaN(grade) == true || grade < 0 || grade > 100) {
            grade = prompt("Please enter a correct Grade!#2")
        }
    }

}

console.log(`
In the class there are: ${num_of_students} students
The avarage of the grade is ${avarage/num_of_students}
The highest grade is ${highest}
The Lowest grade is ${lowest}
`);
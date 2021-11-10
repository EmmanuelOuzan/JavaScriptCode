const student_names = ["emmanuel","Hana"];
// To do
// Check every solution + comment
// Turn it into a function
function students_less_then_5_chars(params) {
    for (i of student_names){
        if((i.length) < 5){
           console.log(i);
        }
    }
}

for(i of student_names){
    if(i.includes('i') && (i[i.length -1] !== 'i')){
        console.log(i);
        
    }
}
let i_arry = [];
let count = 0;
for(i of student_names){
    if(i.includes('i')){
        for(let j = 0; j< i.length; j++){
            if(i[j] == 'i')
                count++;       
        }
      i_arry[i] = count;
    }
}
let total = 0;
for (i of student_names){
    for(let j = 0; j < i.length; j++){
        total++;
    }
}
console.log(total);

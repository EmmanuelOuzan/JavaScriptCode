const student_names = ["emmanuel","Hana","Nava","Shlomi","aviv"];

for (i of student_names){
    if((i.length) < 5){
       // console.log(i);
    }
}
for(i of student_names){
    if(i.includes('i') && (i[i.length -1] !== 'i')){
        console.log(i);
        
    }
}
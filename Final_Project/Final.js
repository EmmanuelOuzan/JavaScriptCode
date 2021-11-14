// constructor of person 

function Person(fname,lname,id,city,birthDate,parentId=0) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.city = city;
    this.birthDate = birthDate;
    this.parentId = parentId;
}

let person1 = new Person('Emmanuel','Ouzan','123','JLM','08/08/1997','5');
let people = [];
people.push(person1);
// people.forEach(person => console.log(person.id)  );
let check = people.filter(person => console.log(person));

function check_input(fname,lname,id,city,birthDate,parentId=0) {
    
}
function add_person(fname,lname,id,city,birthDate,parentId=0) {
    if(parentId != 0){
        if(people.forEach(person => console.log(person.id)){
            
        }
    }
}
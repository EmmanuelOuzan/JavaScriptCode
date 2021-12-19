// Make functions
const fs = require('fs');
const list_path = `${__dirname}/files/todolist.json`
let counter_ID = 1;

// Example task
const example_task = { "text": "todo_1", "done": false, "id": 0 }

// Creation of list if it dose not exist
if (!fs.existsSync(list_path)) {
    fs.writeFileSync(list_path, JSON.stringify([example_task]));
}
// Loads List
const list = require(list_path)

function reset_list() {
    fs.writeFileSync(list_path, JSON.stringify([example_task]));
}
function read_task_list() {

}


const to_do1 = { "text": "buy chicken", "done": false }
create(to_do1)

function create(task) {
    // validation
    task.id = counter_ID;
    counter_ID++;
    list.push(task)
    return list
}
// Overview
function read(id) {
    if (id) {
        const index = list.findIndex(element => element.id == id)
        if (index != -1)
            return list[index]
        else
            return `ID Number ${id} was not found`
    }
    return list 
}

function update(params) {

}
function del(params) {

}

module.exports = {
    create,
    read,
    update,
    delete: del
}

// future validation 
const valid =
{
    "text": "string",
    "done": "boolean"
}
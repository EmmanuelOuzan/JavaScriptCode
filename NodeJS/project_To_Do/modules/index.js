// Make functions

// Loads List
// const list = require(list_path)
// Need to code - write function and read function


const fs = require('fs');
const list_path = `${__dirname}/files/todolist.json`
let counter_ID = 1;

// Example task
const example_task = { "text": "todo_1", "done": false, "id": 0 }

// Creation of list if it dose not exist
if (!fs.existsSync(list_path)) {
    fs.writeFileSync(list_path, '[]');
}

function create(task) {
    // validation
    const list = getListFromJSON()
    task.id = counter_ID++;
    list.push(task)
    saveListToJSON(list)
    return list
}
// Overview
function read(id) {
    const list = getListFromJSON()
    if (id) {
        const index = list.findIndex(element => element.id == id)
        if (index != -1)
            return list[index]
        else
            return `ID Number ${id} was not found`
    }
    return list
}

function update(id) {
    const
        list = getListFromJSON(),
        index = list.findIndex(task => task.id == id)
    if (index != -1) {
        list[index].done = !list[index].done
    }
    else
        return `Could not find ID: ${id}`
}
function del(id) {
    const
        list = getListFromJSON(),
        index = list.findIndex(task => task.id == id)
    deleted = list[index]
    list.splice(index, 1)
    saveListToJSON(list)
    return deleted
}

module.exports = {
    create,
    read,
    update,
    delete: del,
}
// INTERNAL FUNCTIONS 

function getListFromJSON() {
    return require(list_path)
}
function saveListToJSON(list) {
    fs.writeFileSync(list_path, JSON.stringify(list));
}









// future validation
// const valid =
// {
//     "text": "string",
//     "done": "boolean"
// }
// function reset_list() {
//     fs.writeFileSync(list_path, JSON.stringify([example_task]));
// }
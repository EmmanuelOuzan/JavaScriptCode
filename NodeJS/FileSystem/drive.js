const fs = require('fs');
const path = `./root`

// write classic file
fs.writeFileSync('./root/text.txt', 'Hello world');

// Function to return path :
function list_files(path) {
    return fs.readdirSync(path)
}

function create_directory(dir_name) {
    if (!fs.existsSync(`${path}/${dir_name}`))
        fs.mkdirSync(`${path}/${dir_name}`)
    else
        throw `The directory at "${path}/${dir_name}" already_exists`
}
function create_file(file_format, path) {
    // if (!fs.existsSync(path))
}

module.exports = {
    read,
    create,
    update,
    delete: del,
    create_directory,
    create_file,
    list_files
}


function create(params) {

}
function read(params) {

}
function update(params) {

}
function del(params) {

}

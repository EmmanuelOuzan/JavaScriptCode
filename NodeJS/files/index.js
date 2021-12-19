const fs = require('fs')
// const a = require('/x.json')
// IT has to be a string ! :) 
const obj = { a: 1, b: 2 }
// fs.writeFileSync('a.txt', JSON.stringify(obj));
// fs.mkdirSync('folder-test')
// fs.writeFileSync('folder-test/test.txt', 'a')

// if (!fs.existsSync('x.json')) {
//     fs.writeFileSync('x.json', 'hello_world')

// }
// fs.writeFileSync('simpletext.txt', 'simpletxt')
// const file = fs.readFileSync('./a.txt', { encoding: 'utf8' });
// // console.log(file)
// const f2 = fs.readFileSync('./x.json')
// console.log(f2)
const dir = fs.readdirSync('folder-test')
console.log(dir)

fs.rmdir()
let asterisk = "*"
let size = 5;
let count = 0;
let line_top = "";
let line_bottom = "";
let max_asterix = "*";
let space = "";


while (count <= size) {
    line_top += asterisk;
    line_bottom += asterisk;
    count++;
}
console.log(line_top);
console.log(line_bottom);

while(size > 0){
  space += " ";
  size--;
}
max_asterix = space + "*";
console.log(max_asterix);
let spaces = 5;
while(spaces > 0){
  spaces--;
}
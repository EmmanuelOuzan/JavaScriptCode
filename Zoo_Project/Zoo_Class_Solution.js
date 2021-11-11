let text1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let text2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
let animal_text = text1.concat(", ", text2).split(', ');
let animals = [];
for (v of animal_text) {
    for (i in v) {
        if (!isNaN(v[i])) {
            animals[Number(v.slice(i))] = [v.slice(0,i)];
            break;
        }
    }
}
console.log(animals);
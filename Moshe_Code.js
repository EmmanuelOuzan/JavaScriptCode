let userString = prompt("enter something but not a number");
let isExit = true;
while (isExit) {
    let userinput = Number(prompt(`
    What do you want to do brother?
    [1] - for printing a letter
    [2] - for printing the userString reversed
    [3] - Checks if the userString is a palindrome
    [4] - Prints if the user contains a number
    [5] - find latters thath you want
    [6] - exit
    `));

    switch (userinput) {

        case 1:
            for (let i = 0; i < userString.length; i++) {
                console.log(userString[i]);
            }
            break;

        case 2:
            for (let i = userString.length - 1; i >= 0; i--) {
                console.log(userString[i]);
            }
            break;

        case 3:
            let y = "",
                z = "";
            for (let i = 0; i < userString.length; i++) {
                y += userString[i];
            }

            for (let i = userString.length - 1; i >= 0; i--) {
                z += userString[i];
            }
            (z === y) ? console.log("paliandrom "): console.log("is not ");
            break;
        case 4:
            for (let i = 0; i < userString.length; i++) {
                console.log(i)
                if (!isNaN(userString[i])) {    
                    console.log("The string contains a number");
                    break;
                } 
                console.log("nothing found");
                break;
            }
            break;
            case 5:
                let Letter = "e";
                let counter = 0;
                for (i = 0; i < userString.length; i++) {
                    if (userString[i] == Letter) {
                        counter++;
                    }
                }
                console.log(counter);
                break;
            case 0:
            case 6:
                console.log("nooooo please~!!!!!");
                isExit = false;
                break;
            default:
                console.log("default");
    }
}
console.log("end");
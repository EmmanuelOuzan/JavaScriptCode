    // For loops

    // input from the user a userString and a choice

    // let userinput = prompt(`
    // What do you want to do brother?
    // [1] - for printing a letter
    // [2] - for printing the userString reversed
    // [3] - Checks if the userString is a palindrome
    // [4] - Prints if the userString contains a number
    // `
    // )

    let userString = 'Emmanuel';
    let userinput = '5';
    let new_string = "";
    let exit = true;
while(exit){
    userinput = prompt("Enter your choice")
    switch (userinput) {
        case '1':
            for (let i = 0; i < userString.length; i++) {
                console.log[userString[i]]
                console.log("1")
            }
            break;
        case '2':
            console.log("Starting to Reverse!");
            for (let i = userString.length - 1; i >= 0; i--) {
                new_string += userString[i]

            }
            console.log(new_string)
            break;
        case '3':
            console.log("Checking if its a Palindrom!");
            let len = userString.length
            for (i = 0; i < len / 2; i++) {
                if (userString[i] != userString[len - 1 - i]) {
                    console.log("The string is not a Palindrom!")
                    break;
                }
                console.log("The string is a palindrom")
                break;
            }
            case '4':
                console.log("Lets check if we have a number in the string");
                for (i = 0; i < userString.length - 1; i++) {
                    if (!isNaN(userString[i])) {
                        console.log("The string contains a number");
                        break;
                    }
                    console.log("The string dose not contain a number!");
                    break;
                }
                case '5':
                    console.log("Now, I will count the encourences of the char in the string");
                    let char = 'm';
                    let counter = 0;
                    for (let i = 0; i < userString.length - 1; i++) {
                        if (char == userString[i]) {
                            counter++;
                        }
                    }
                    console.log(`The number is appearing ${counter} times`)

                    break;
                case null:
                case '6':
                    exit = false;
                    console.log("You have exited the program!");
                    break;
                default:
                    console.log("Please enter a valid number!")
                    break;
    }
}
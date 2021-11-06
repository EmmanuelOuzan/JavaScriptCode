    // For loops

    // input from the user a userString and a choice
    // 1. Will return the string letter by letter
    // 2. Will reverse the string
    // 3. Will check if the string is a Palindrome
    // 4. Checks if the string contains a number or not
    // 5. Takes a char and returns how many times it appears in the string.

    let userString = prompt("Enter a string");
    let exit = true;
    while (exit) {
        let userinput = prompt(`
    Choose!
    [1] - for printing a letter
    [2] - for printing the userString reversed
    [3] - Checks if the userString is a palindrome
    [4] - Prints if the userString contains a number
    [5] - Find a char in the string
    [6] - To exit the program
    `);
        switch (userinput) {
            case '1':
                for (let i = 0; i < userString.length; i++) {
                    console.log(userString[i]);
                }
                break;
            case '2':
                let new_string = "";
                console.log("Starting to Reverse!");
                for (let i = userString.length - 1; i >= 0; i--) {
                    new_string += userString[i] + " "

                }
                console.log(new_string)
                break;
            case '3':
                let len = userString.length
                for (i = 0; i < len / 2; i++) {
                    if (userString[i] != userString[len - 1 - i]) {
                        console.log("The string is not a Palindrom!")
                        break;
                    }
                    console.log("The string is a palindrom")
                    break;
                }
                break;
            case '4':
                for (i = 0; i < userString.length; i++) {
                    if (!isNaN(userString[i])) {
                        console.log("The string contains a number");
                        break;
                    }
                    console.log("The string dose not contain a number");
                    break;
                }
                break;
            case '5':
                let charToFind = prompt("Which char do you want to find in the string?");
                let count = 0;
                let position = 0;
                while (userString.indexOf(charToFind, position) !== -1) {
                    count++;
                    position = userString.indexOf(charToFind, position) + 1;
                }
                console.log(`The char appears ${count} time(s)`)
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
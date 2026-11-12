function getComputerChoice() {
    //Create a vairable named choice and intialize it to a random number using Math.random
    let choice = Math.random();
    //Multiply the number by 10
    choice = choice * 10;
    //Floor the number, so we get a number from 1 to 9 inclusive (can be devided by 3)
    choice = Math.floor(choice);

    //IF the number is below or equal to 3 THEN:
    if (choice <= 3) {
        //RETURN the string "rock"
        return "rock";
    }
    //ELSE IF the number is below or equal to 6 THEN:
    else if (choice <= 6) {
        //RETURN the string "paper"
        return "paper";
    }
    //ELSE:
    else {
        //RETURN the string "scissors"
        return "scissors";
    }
    //END IF
}

function getHumanChoice() {
    //Create variable named input and intialize it to prompt the user for "Pick rock, paper or scissors"
    let input = prompt("Pick rock, paper or scissors");

    //IF input is null THEN:
    if (input === null) {
        //Set input to "rock" as default
        input = "rock";
    }

    //Turn the input string to all lowercase
    input = input.toLowerCase();
    //RETURN the user's choice string
    return input;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
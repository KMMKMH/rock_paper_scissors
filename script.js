//Create Human's score variable intialized to 0
let humanScore = 0;
//Create Computer's score variable intialized to 0
let computerScore = 0;

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
    //ENF IF

    //Turn the input string to all lowercase
    input = input.toLowerCase();
    //RETURN the user's choice string
    return input;
}

function playRound(humanChoice, computerChoice) {
    //SWITCH on humanChoice
    switch(humanChoice) {
        //CASE it is rock THEN:
        case "rock":
            //IF computerChoice is rock THEN:
            if (computerChoice === "rock") {
                //LOG tie
                console.log("It's a tie!");
            }
            //ELSE IF it is paper THEN:
            else if (computerChoice === "paper") {
                //LOG loose
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                //Increment computer's score
                computerScore++;
            }
            //ELSE:
            else {
                //LOG win
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                //Increment human's score
                humanScore++;
            }
            //BREAK
            break;
        //CASE it is paper THEN:
        case "paper":
            //IF computerChoice is rock THEN:
            if (computerChoice === "rock") {
                //LOG win
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                //Increment human's score
                humanScore++;
            }
            //ELSE IF it is paper THEN:
            else if (computerChoice === "paper") {
                //LOG tie
                console.log("It's a tie!");
            }
            //ELSE:
            else {
                //LOG loose
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                //Increment computer's score
                computerScore++;
            }
            //BREAK
            break;
        //CASE it is scissors THEN:
        case "scissors":
            //IF computerChoice is rock THEN:
            if (computerChoice === "rock") {
                //LOG loose
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                //Increment computer's score
                computerScore++;
            }
            //ELSE IF it is paper THEN:
            else if (computerChoice === "paper") {
                //LOG win
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                //Increment human's score
                humanScore++;
            }
            //ELSE:
            else {
                //LOG tie
                console.log("It's a tie!");
            }
            //BREAK
            break;
        //DEFAULT:
        default:
            //Log "Something went wrong, please reload the page."
            console.log("Something went wrong, please reload the page.");
    }
    //END SWITCH
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
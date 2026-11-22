let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("#container");
const scores = document.querySelector("#scores");
const result = document.querySelector("#result");

function getComputerChoice() {
    let choice = Math.random();
    choice = choice * 10;
    //From 1 to 9 inclusive (can be devided by 3)
    choice = Math.floor(choice);

    if (choice <= 3) {
        return "rock";
    }
    else if (choice <= 6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function logScores(humanScore, computerScore, text) {
    scores.textContent = `HUMAN: ${humanScore}; COMPUTER: ${computerScore}`;

    if (computerScore < 5 && humanScore < 5) {
        result.textContent = text;
        return;
    }

    if (humanScore >= 5) {
        result.textContent = "YOU WON!!!";
    } else {
        result.textContent = "YOU LOST, COMPUTER WON THE GAME!!!";
    }
    const gameOver = new CustomEvent("gameover");
    container.dispatchEvent(gameOver);
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart?";
    restartBtn.addEventListener("click", () => {
        location.reload();
    });
    result.parentNode.appendChild(restartBtn);
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                logScores(humanScore, computerScore, "It's a tie! You both chose rock");
            }
            else if (computerChoice === "paper") {
                computerScore++;
                logScores(humanScore, computerScore, `You lose! ${computerChoice} beats ${humanChoice}`);
            }
            else {
                humanScore++;
                logScores(humanScore, computerScore, `You win! ${humanChoice} beats ${computerChoice}`);
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                logScores(humanScore, computerScore, `You win! ${humanChoice} beats ${computerChoice}`);
            }
            else if (computerChoice === "paper") {
                logScores(humanScore, computerScore, "It's a tie! You both chose paper");
            }
            else {
                computerScore++;
                logScores(humanScore, computerScore, `You lose! ${computerChoice} beats ${humanChoice}`);
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                logScores(humanScore, computerScore, `You lose! ${computerChoice} beats ${humanChoice}`);
            }
            else if (computerChoice === "paper") {
                humanScore++;
                logScores(humanScore, computerScore, `You win! ${humanChoice} beats ${computerChoice}`);
            }
            else {
                logScores(humanScore, computerScore, "It's a tie! You both chose scissors");
            }
            break;
        default:
            console.log("Something went wrong, please reload the page.");
    }
}

function playGame() {
    const btnRock = document.createElement("button");
    const btnPaper = document.createElement("button");
    const btnScissors = document.createElement("button");

    btnRock.textContent = "Rock";
    btnPaper.textContent = "Paper";
    btnScissors.textContent = "Scissors";
    scores.textContent = "HUMAN: 0; COMPUTER: 0";
    result.textContent = "Pick a choice to start!";

    btnRock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    btnPaper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    btnScissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
    container.addEventListener("gameover", () => {
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    })

    container.appendChild(btnRock);
    container.appendChild(btnPaper);
    container.appendChild(btnScissors);
}

playGame();
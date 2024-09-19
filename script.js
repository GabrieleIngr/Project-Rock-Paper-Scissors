let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice(); 
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    result += `\n\nCurrent score - You: ${humanScore}, Computer: ${computerScore}`;
    return result; //return the result to the playGame function 
}

function playGame(roundNumber) {
    if (roundNumber > 5) {
        let finalResult;
        if (humanScore > computerScore) {
            finalResult = `You are the winner!\nFinal score - You: ${humanScore}, Computer: ${computerScore}`;
        } else if (computerScore > humanScore) {
            finalResult = `The computer is the winner!\nFinal score - You: ${humanScore}, Computer: ${computerScore}`;
        } else {
            finalResult = `The game is a tie overall!\nFinal score - You: ${humanScore}, Computer: ${computerScore}`;
        }
        alert(finalResult);  // Show final result and scores
        return;
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);

    alert(roundResult);  // Show result of the round and scores

    playGame(roundNumber + 1); 
}

playGame(1);

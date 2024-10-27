const props = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

const getComputerChoice = function () {
  let choice = props[Math.floor(props.length * Math.random())];
  return choice;
};

const getHumanChoice = function () {
  let choice;
  while (!props.includes(choice)) {
    choice = prompt("Please, pick Rock, Paper, or Scissors :)");

    choice =
      choice.trim().charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  }

  return choice;
};

const playRound = function (round) {
  console.log(`Round ${round}:`);
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("Human wins, Rock beats Scissors");
    playerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("Human wins, Scissors beats paper");
    playerScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("Human wins, Paper beats Rock");
    playerScore++;
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    console.log("Computer wins, Rock beats Scissors");
    computerScore++;
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    console.log("Computer wins, Scissors beats Paper");
    computerScore++;
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    console.log("Computer wins, Paper beats Rock");
    computerScore++;
  } else if (
    (computerChoice === "Paper" && humanChoice === "Paper") ||
    (computerChoice === "Rock" && humanChoice === "Rock") ||
    (computerChoice === "Scissors" && humanChoice === "Scissors")
  ) {
    console.log("It is a tie!");
  }
  return { humanChoice, computerChoice };
};

const playGame = function () {
  for (let i = 1; i < 6; i++) {
    let rounds = playRound([i]);
  }
  if (playerScore > computerScore) {
    console.log(
      `Human won, the total score is: ${playerScore} ${computerScore}`
    );
  } else if (playerScore === computerScore) {
    console.log(
      `We have a tie, the total score is: ${playerScore} ${computerScore}`
    );
  } else {
    console.log(
      `Computer won, the total score is: ${computerScore} ${playerScore}`
    );
  }
};

playGame(1);

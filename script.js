"use strict";

const Rock = document.querySelector(".rock");
const Paper = document.querySelector(".paper");
const Scissors = document.querySelector(".scissors");
const Result = document.querySelector(".result");
const Score = document.querySelector(".score");
const Winner = document.querySelector(".winner");
const reset = document.querySelector(".reset");

const props = ["Rock", "Paper", "Scissors"];

let computerScore, playerScore, round, humanChoice, playing;

const start = function () {
  computerScore = 0;
  playerScore = 0;
  round = 0;
  playing = true;
  Result.textContent = "Result:";
  Score.textContent = "Score:";
  Winner.textContent = "Winner:";
  Winner.classList.remove("winner-highlight");
};

start();

Rock.addEventListener("click", function () {
  humanChoice = "Rock";

  playGame();
});

Paper.addEventListener("click", function () {
  humanChoice = "Paper";

  playGame();
});

Scissors.addEventListener("click", function () {
  humanChoice = "Scissors";

  playGame();
});

const getComputerChoice = function () {
  let choice = props[Math.floor(props.length * Math.random())];
  return choice;
};

const checkWinner = function () {
  if (round === 5) {
    if (computerScore > playerScore) {
      Winner.textContent = "Computer won the game! 🎉";
      Winner.classList.add("winner-highlight");
    } else if (playerScore > computerScore) {
      Winner.textContent = "Human won the game! 🎉";
      Winner.classList.add("winner-highlight");
    } else {
      Winner.textContent = "It's a tie! 🤝";
    }

    playing = false;
  }
};

const playGame = function () {
  if (playing) {
    round++;
    let computerChoice = getComputerChoice();
    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Scissors" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
      Result.textContent = `Round-${round}: Human wins, ${humanChoice} beats ${computerChoice}`;
      playerScore++;
      Score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    } else if (humanChoice === computerChoice) {
      Result.textContent = `Round-${round}: It is a tie!`;
    } else {
      Result.textContent = `Round-${round}: Computer wins, ${computerChoice} beats ${humanChoice}`;
      computerScore++;
      Score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    }
    checkWinner();
  }
};

reset.addEventListener("click", start);

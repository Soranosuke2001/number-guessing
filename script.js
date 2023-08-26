"use strict";

// DOM Elements
const messageBox = document.querySelector(".message");
const guessBox = document.querySelector(".guess");
const scoreBox = document.querySelector(".score");
const randomNumberBox = document.querySelector(".number");
const body = document.querySelector("body");

let userScore = 20;

// Generate a random number (1 - 20)
let number = Math.trunc(Math.random() * 20) + 1;

// Decrease the score by 1 for each wrong guess
const scoreAdjust = () => {
  userScore--;
  scoreBox.textContent = userScore;
};

// Check if the guessed number is the same as the random number generated
document.querySelector(".check").addEventListener("click", () => {
  const userInput = Number(guessBox.value);

  // Check if the user inputted a value
  if (!userInput) {
    messageBox.textContent = "Please Enter a Number!";
    return;
  }

  // Check if the user guessed the right number
  if (userInput === number) {
    messageBox.textContent = "You guessed the number!";

    // Change the background color, increase randomNumberBox width and show the random number
    // NOTE: Adds the styling inline, does not change the CSS file
    body.style.backgroundColor = "#60b347";
    randomNumberBox.style.width = "30rem";
    randomNumberBox.textContent = number;
  }

  // Check if the user guessed too high
  if (userInput > number) {
    messageBox.textContent = "Guessed too high!";
    scoreAdjust();
  }

  // Check if the user guessed too low
  if (userInput < number) {
    messageBox.textContent = "Guessed too low!";
    scoreAdjust();
  }

  // Check if the user lost (score = 0)
  if (userScore <= 0) {
    messageBox.textContent = "You lost the game!";
  }
});

// Resetting the game when the "Again!" button is clicked
document.querySelector(".again").addEventListener("click", () => {
  // Reset Scores
  userScore = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  // Reset text and guess box
  scoreBox.textContent = userScore;
  messageBox.textContent = "Start guessing...";
  guessBox.value = "";
  randomNumberBox.textContent = "?";

  // Reset styling
  body.style.backgroundColor = "#222";
  randomNumberBox.style.width = "15rem";
});

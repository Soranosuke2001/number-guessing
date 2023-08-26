"use strict";

// DOM Elements
const messageBox = document.querySelector(".message");
const guessBox = document.querySelector(".guess");
const scoreBox = document.querySelector(".score");

let userScore = 20;

// Generate a random number (1 - 20)
const number = Math.trunc(Math.random() * 20);

document.querySelector(".number").textContent = number;

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
});

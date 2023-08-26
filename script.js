"use strict";

// DOM Elements
const messageBox = document.querySelector(".message");
const guessBox = document.querySelector(".guess");

// Generate a random number (1 - 20)
const number = Math.trunc(Math.random() * 20);

document.querySelector(".number").textContent = number;

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
  }
});

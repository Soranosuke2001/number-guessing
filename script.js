"use strict";

// Generate a random number (1 - 20)
const number = Math.trunc(Math.random() * 20);

document.querySelector('.number').textContent = number

// Check if the guessed number is the same as the random number generated
document.querySelector(".check").addEventListener("click", () => {
  const userInput = Number(document.querySelector(".guess").value);

  // Check if the user inputted a value
  if (!userInput) {
    document.querySelector(".message").textContent = "Please Enter a Number!";
    return
  } 
  
  // Check if the user guessed the right number  
  if (userInput === number) {
    document.querySelector(".message").textContent = "You guessed the number!";
  }
});

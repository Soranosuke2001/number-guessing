'use strict';

// DOM Manipulation

// Check if the guessed number is the same as the random number generated
document.querySelector('.check').addEventListener('click', () => {
    const userInput = Number(document.querySelector('.guess').value)

    // Check if the user inputted a value
    if (!userInput) {
        document.querySelector('.message').textContent = 'Please Enter a Number!'
    }
})
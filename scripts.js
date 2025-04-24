'use strict';
/*
// What's the DOM and DOM Manipulation?
console.log(document.querySelector('.message').textContent);

//Selecting and Manipulating Elements
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Implementing the Game Logic

//Getting a random number between 1 and 20 and reassigning it to the secretNumber variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
    //When the guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //Manipulating CSS Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Adding highscore functionality
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
    }
  }
  /*
  //When the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
  //When the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
  */
});
/////////////////////
// Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1.Select the element with the class 'again' and attach a click event handler to it.
2.Inside the handler, restore initial values of the score and number variables.
3.Restore the initial conditions of the message, number, score and guess input fields.
4.Also restore the original background color (#222) and number width (15rem).
*/

document.querySelector('.again').addEventListener('click', function () {
  //Restoring initial values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Restoring initial conditions

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //Restoring original background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

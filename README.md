# Guess My Number Game

This project is a simple number-guessing game built using **JavaScript**, **HTML**, and **CSS**. The game allows users to guess a randomly generated number between 1 and 20. It provides feedback on whether the guess is too high, too low, or correct, and keeps track of the player's score and high score.

## Features

- **Random Number Generation**: A random number between 1 and 20 is generated at the start of the game.
- **User Input Handling**: Users can input their guesses through an input field.
- **Feedback Messages**: The game displays messages such as:
  - "📈 Too high!"
  - "📉 Too low!"
  - "🎉 Correct Number!"
  - "💥 You lost the game!"
- **Score Tracking**: The player's score decreases with each incorrect guess.
- **High Score Tracking**: The game keeps track of the highest score achieved during the session.
- **Game Reset**: A reset button (`Again`) allows players to restart the game with a new random number and reset all values to their initial state.
- **Dynamic Styling**: The background color and number box width change when the player guesses the correct number.

## What Has Been Covered

### 1. **DOM Manipulation**

- Selecting and manipulating DOM elements using `document.querySelector`.
- Updating text content, input values, and styles dynamically.

### 2. **Event Handling**

- Adding click event listeners to buttons (`Check` and `Again`).
- Handling user input and providing feedback based on the guess.

### 3. **Game Logic**

- Generating a random number using `Math.random()` and `Math.trunc()`.
- Comparing user input with the secret number to determine the outcome.
- Implementing conditions for winning, losing, and incorrect guesses.

### 4. **Functions**

- Creating reusable functions like `displayMessage` to simplify code and avoid repetition.

### 5. **CSS Manipulation**

- Dynamically changing styles such as background color and element width using JavaScript.

### 6. **State Management**

- Managing game state variables like `score`, `highscore`, and `secretNumber`.

## How to Play

1. Open the game in a browser.
2. Enter a number between 1 and 20 in the input field.
3. Click the "Check!" button to submit your guess.
4. The game will provide feedback:
   - If the guess is correct, the background turns green, and the high score is updated.
   - If the guess is incorrect, the score decreases, and feedback is displayed.
5. To restart the game, click the "Again!" button to reset all values and start a new round.

## Technologies Used

- **JavaScript**: Core game logic and DOM manipulation.
- **HTML**: Structure of the game interface.
- **CSS**: Styling for the game interface.

## How to Run the Code

1. Clone the repository or download the project files.
2. Open the `index.html` file in a browser.
3. Play the game!

## Future Improvements

- Add difficulty levels (e.g., easy, medium, hard) with different ranges of numbers.
- Implement a timer to add a time-based challenge.
- Store high scores in local storage to persist across sessions.

Enjoy the game!

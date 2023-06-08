# Hangman Game Rules

Hangman is a guessing game where you need to guess a word by suggesting letters within a certain number of attempts.

## Game Objective

The objective of the game is to guess the word before making too many incorrect guesses.

## How to Play

1. A word is randomly selected from a predefined dictionary.
2. The word is displayed as underscored representing each letter.
3. Guess letters one by one to fill in the blanks.
4. If the guessed letter is in the word, it will be revealed in the correct position.
5. If the guessed letter is not in the word, it will count as an incorrect guess.
6. You have a limited number of incorrect guesses before the game is lost.
7. Keep guessing until you either guess the word correctly or run out of attempts.

## Controls

- Click on the letters in the keyboard to make a guess.
- The game will inform you if your guess is correct or incorrect.
- You can restart the game at any time by clicking the "Restart" button.

## Installation

To run the Hangman game on your local machine, follow these steps:

1. Make sure you have Node.js and Git installed on your machine.

2. Open the Command Prompt and navigate into a folder of your choice. For example:
```bash
cd C:\Users\User\Desktop\test
```

3. Once inside the chosen folder, run this command to clone this repository:
```bash
git clone https://github.com/DaniHfs/hangman.git
```

4. Once the cloning completes, navigate to the project directory:
```bash
cd hangman
```

4. Install the dependencies:
```bash
npm install
```

5. Once the dependencies are installed, start the server:
```bash
npm start
```
  Don't close the terminal window at this point.

6. A browser window for the game should open automatically, but if it doesn't, open your web browser and visit http://localhost:3000 to play the game.

7. Once you're finished, go back to the terminal and hit ctrl+c. You will be prompted to end a batch job. Input 'y' then enter. The server is now shut down and you can close the terminal window.

Have fun playing Hangman!

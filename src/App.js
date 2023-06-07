import React, { useState, useEffect } from 'react';
import Hangman from './components/Hangman';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import Status from './components/Status';
import './hangman.css';

const App = () => {
  const [word, setWord] = useState(''); // Stores the randomly chosen word
  const [guessedLetters, setGuessedLetters] = useState([]); // Stores the letters guessed by the player
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Stores the count of incorrect guesses
  const [gameStatus, setGameStatus] = useState('playing'); // Stores the current game status

  useEffect(() => { 
    fetchWord(); // Fetches a random word from the dictionary when the component mounts
  }, []);

  const fetchWord = async () => {
    try {
      const response = await fetch('/dictionary.txt'); // Fetches the dictionary file
      const text = await response.text(); // Extracts the text content from the response
      const lines = text.split(/\r?\n|\r/);; // Splits the text into an array of lines
      const words = lines
        .slice(38)
        .filter((word) => /^[a-zA-Z]+$/.test(word)) // Filters out non-alphabetic words
        .map((word) => word.toUpperCase()) // Converts all words to uppercase
        .filter((word) => word.length > 0); // Filters out empty words
  
      if (words.length === 0) {
        throw new Error('No valid words found in the dictionary.'); // Throws an error if no valid words are found
      }
  
      const randomIndex = Math.floor(Math.random() * words.length); // Generates a random index within the range of words array
      const randomWord = words[randomIndex]; // Retrieves a random word from the words array
  
      setWord(randomWord); // Sets the randomly chosen word
      setGuessedLetters([]); // Resets the guessed letters array
      setIncorrectGuesses(0); // Resets the count of incorrect guesses
      setGameStatus('playing'); // Sets the game status to 'playing'
    } catch (error) {
      console.error('Error fetching word:', error); // Logs an error if there's an issue fetching the word
    }
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      const updatedGuesses = [...guessedLetters, letter]; // Adds the guessed letter to the guessedLetters array
      setGuessedLetters(updatedGuesses); // Updates the guessed letters array with the new guess

      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1); // Increments the count of incorrect guesses if the guessed letter is not present in the word
      }
    }
  };

  const handleRestart = () => {
    setGuessedLetters([]); // Resets the guessed letters array
    setIncorrectGuesses(0); // Resets the count of incorrect guesses
    setGameStatus('playing'); // Sets the game status to 'playing'
    fetchWord(); // Fetches a new random word from the dictionary
  };

  useEffect(() => {
    const checkGameStatus = () => {
      if (incorrectGuesses >= 10) { 
        setGameStatus('loss'); // Sets the game status to 'loss' if the count of incorrect guesses reaches 10
      } else if (word.split('').every((letter) => guessedLetters.includes(letter))) {
        setGameStatus('win'); // Sets the game status to 'win' if all letters in the word are guessed correctly
      }
    };

    checkGameStatus(); // Checks the game status whenever the guessedLetters array is updated
  }, [guessedLetters, incorrectGuesses, word]);

  return (
    <div className="app">
      <h1>Hangman Game</h1>
      <Hangman incorrectGuesses={incorrectGuesses} /> {/* Renders the hangman image */}
      <Word word={word} guessedLetters={guessedLetters} /> {/* Renders the word with guessed letters */}
      <Keyboard onClick={handleGuess} guessedLetters={guessedLetters} incorrectGuesses={incorrectGuesses} /> {/* Renders the keyboard for letter selection */}
      <Status gameStatus={gameStatus} onRestart={handleRestart} word={word} /> {/* Renders the game status and restart button */}
    </div>
  );
};

export default App;

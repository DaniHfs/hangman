import React, { useState, useEffect } from 'react';
import Hangman from './components/Hangman';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import Status from './components/Status';
import './hangman.css';

const App = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    try {
      const response = await fetch('/dictionary.txt');
      const text = await response.text();
      const lines = text.split('\n');
      const words = lines.slice(38)
        .filter((word) => /^[a-zA-Z]+$/.test(word))
        .map((word) => word.toUpperCase())
        .filter((word) => word.length > 0);
      
      if (words.length === 0) {
        throw new Error('No valid words found in the dictionary.');
      }
  
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      
      setWord(randomWord);
      setGuessedLetters([]);
      setIncorrectGuesses(0);
      setGameStatus('playing');
    } catch (error) {
      console.error('Error fetching word:', error);
    }
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      const updatedGuesses = [...guessedLetters, letter];
      setGuessedLetters(updatedGuesses);

      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  const handleRestart = () => {
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus('playing');
    fetchWord();
  };

  const checkGameStatus = () => {
    if (incorrectGuesses >= 10) {
      setGameStatus('loss');
    } else if (word.split('').every((letter) => guessedLetters.includes(letter))) {
      setGameStatus('win');
    }
  };

  useEffect(() => {
    checkGameStatus();
  }, [guessedLetters]);

  return (
    <div className="app">
      <h1>Hangman Game</h1>
      <Hangman incorrectGuesses={incorrectGuesses} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard onClick={handleGuess} guessedLetters={guessedLetters} incorrectGuesses={incorrectGuesses} />
      <Status gameStatus={gameStatus} onRestart={handleRestart} />
    </div>
  );
};

export default App;

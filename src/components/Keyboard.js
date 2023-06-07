import React, { useState } from 'react';

const Keyboard = ({ onClick, guessedLetters, incorrectGuesses }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    const handleClick = (letter) => {
      if (!guessedLetters.includes(letter)) {
        onClick(letter);
      }
    };
  
    return (
      <div className="keyboard">
        {alphabet.split('').map((letter) => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            disabled={guessedLetters.includes(letter) || incorrectGuesses >= 10}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };
  
  export default Keyboard;
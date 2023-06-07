import React from 'react';

const Keyboard = ({ onClick, guessedLetters, incorrectGuesses }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const handleClick = (letter) => {
        // Handle click event on keyboard button
        if (!guessedLetters.includes(letter)) {
            onClick(letter); // Call the onClick function passed as props
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

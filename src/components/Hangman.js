import React from 'react';

const Hangman = ({ incorrectGuesses }) => {
    // Array of hangman images
    const hangmanImages = [
        require('../assets/hangman0.GIF'),
        require('../assets/hangman1.GIF'),
        require('../assets/hangman2.GIF'),
        require('../assets/hangman3.GIF'),
        require('../assets/hangman4.GIF'),
        require('../assets/hangman5.GIF'),
        require('../assets/hangman6.GIF'),
        require('../assets/hangman7.GIF'),
        require('../assets/hangman8.GIF'),
        require('../assets/hangman9.gif'),
        require('../assets/hangman10.GIF'),
    ];

    return (
        <div className="hangman">
            {/* Display the hangman image corresponding to the number of incorrect guesses */}
            <img src={hangmanImages[incorrectGuesses]} alt="hangman" />
        </div>
    );
};

export default Hangman;

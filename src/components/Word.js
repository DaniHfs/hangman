import React from 'react';
import Letter from './Letter';

const Word = ({ word, guessedLetters }) => {
    return (
        <div className="word">
            {/* Split the word into individual letters and map over them */}
            {word.split('').map((letter, index) => (
                <Letter key={index} letter={letter} guessed={guessedLetters.includes(letter)} />
            ))}
        </div>
    );
};

export default Word;

import React from 'react';
import Letter from './Letter';

const Word = ({ word, guessedLetters }) => {
    return (
        <div className="word">
            {word.split('').map((letter, index) => (
                <Letter key={index} letter={letter} guessed={guessedLetters.includes(letter)}/>
            ))}
        </div>
    );
};

export default Word;
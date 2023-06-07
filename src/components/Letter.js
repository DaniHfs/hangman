import React from 'react';

const Letter = ({ letter, guessed }) => {
    // Render a letter component
    return (
        <span className={`letter ${guessed ? 'guessed' : ''}`}>
            {/* Display the letter if it has been guessed, otherwise display an underscore */}
            {guessed ? letter : '_'}
        </span>
    );
};

export default Letter;

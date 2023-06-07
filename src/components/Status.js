import React, { useState, useEffect } from 'react';

const Status = ({ gameStatus, onRestart, word }) => {
    const [showHelp, setShowHelp] = useState(false);
    const [helpContent, setHelpContent] = useState('');

    useEffect(() => {
        // Fetch help content when the component mounts
        const fetchHelpContent = async () => {
            try {
                const response = await fetch('/rules.md');
                const content = await response.text();
                setHelpContent(content);
            } catch (error) {
                console.error('Error fetching help content: ', error);
            }
        };
        fetchHelpContent();
    }, []);

    const toggleHelp = () => {
        // Toggle the display of help content
        setShowHelp(!showHelp);
    };

    const renderMessage = () => {
        // Render the appropriate message based on game status
        if (gameStatus === 'win') {
            return <h2>Congratulations! You won!</h2>;
        } else if (gameStatus === 'loss') {
            return <h2>Oops! You lost!<br/>The word was: {word}</h2>;
        } else {
            return null;
        }
    };

    const renderHelp = () => {
        // Render the help content if showHelp is true
        if (showHelp) {
            return (
                <div className="help">
                    <h3>Game Instructions</h3>
                    <pre>{helpContent}</pre>
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="status">
            {renderMessage()} {/* Render game status message */}
            <button className="restart" onClick={onRestart}>Restart</button> {/* Restart button */}
            <button className="help" onClick={toggleHelp}>{showHelp ? 'Hide Help' : 'Show Help'}</button> {/* Toggle help button */}
            {renderHelp()} {/* Render help content */}
        </div>
    );
};

export default Status;

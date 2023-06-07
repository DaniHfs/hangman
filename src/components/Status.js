import React, { useState, useEffect } from 'react';

const Status = ({ gameStatus, onRestart }) => {
    const [showHelp, setShowHelp] = useState(false);
    const [helpContent, setHelpContent] = useState('');

    useEffect(() => {
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
        setShowHelp(!showHelp);
    };

    const renderMessage = () => {
        if (gameStatus === 'win') {
            return <h2>Congratulations! You won!</h2>;
        } else if (gameStatus === 'loss') {
            return <h2>Oops! You lost!</h2>;
        } else {
            return null;
        }
    };

    const renderHelp = () => {
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
            {renderMessage()}
            <button className="restart" onClick={onRestart}>Restart</button>
            <button className="help" onClick={toggleHelp}>{showHelp ? 'Hide Help' : 'Show Help'}</button>
            {renderHelp()}
        </div>
    );
};

export default Status;
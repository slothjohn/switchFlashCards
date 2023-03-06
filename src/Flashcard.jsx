import React, { useState } from 'react';

function Flashcard({ front, back }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
    setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="front">{front}</div>
        <div className="back">{back}</div>
        </div>
    );
}

export default Flashcard;

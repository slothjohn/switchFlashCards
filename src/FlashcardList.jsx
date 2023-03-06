import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards }) {

    const [currentCard, setCurrentCard] = useState(0);
    const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
      setCurrentCard(randomIndex);
    };

    return (
        <div>
        <Flashcard {...flashcards[currentCard]} />
        <button onClick={handleNextCard}>Next</button>
        </div>
    );
}

export default FlashcardList;

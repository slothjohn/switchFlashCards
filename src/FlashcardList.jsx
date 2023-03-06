import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  let prev = Math.floor(Math.random() * flashcards.length)

  const handleNextCard = () => {

    let randomIndex = currentCard;
    while (randomIndex === currentCard) {
      randomIndex = Math.floor(Math.random() * flashcards.length);
    } 
    setCurrentCard(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div>
      <Flashcard front={flashcards[currentCard].front} back={flashcards[currentCard].back} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
}

export default FlashcardList;

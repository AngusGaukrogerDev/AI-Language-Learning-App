import React, { useState } from 'react';

interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  wordLevel: number;
}

interface CardLevel1Props {
  cardData: CardData;
  onIndexChange: (increment: boolean) => void; // Callback function type
}

const CardLevel1: React.FC<CardLevel1Props> = ({ cardData, onIndexChange }) => {
  const [userTranslation, setUserTranslation] = useState<string>(''); // State to store user input
  const [feedback, setFeedback] = useState<string>(''); // State to provide feedback

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTranslation(event.target.value);
  };

  const handleSubmit = () => {
    // Check if the provided translation matches the expected translation
    const correctTranslation = cardData.spanishTranslation.toLowerCase().trim();
    const userResponse = userTranslation.toLowerCase().trim();

    if (userResponse === correctTranslation) {
      setFeedback('Correct!'); // Provide feedback
      onIndexChange(true); // Trigger increment callback
    } else {
      setFeedback('Incorrect!'); // Provide feedback
      onIndexChange(false); // Trigger decrement callback
    }
  };

  return (
    <>
      <div className='my-1' key={cardData.id}>
        <p>LEVEL 1</p>
        <p>Translate "{cardData.englishTranslation}" to Spanish:</p>
        <input type="text" value={userTranslation} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
        {feedback && <p>{feedback}</p>}
      </div>
    </>
  );
};

export default CardLevel1;

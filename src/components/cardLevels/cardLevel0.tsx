import React from 'react';

interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  wordLevel: number;
}

interface CardLevel0Props {
  cardData: CardData;
  onIndexChange: (increment: boolean) => void; // Callback function type
}

const CardLevel0: React.FC<CardLevel0Props> = ({ cardData, onIndexChange }) => {
  const handleIncrement = () => {
    // Call the parent component's callback to increment the index
    onIndexChange(true);
  };

  return (
    <>
      <div className='my-1 bg-pitahaya-grey border-white text-white' key={cardData.id}>
        <img src="" alt="" />
        <h3>{cardData.englishTranslation}</h3>
        <h3>{cardData.spanishTranslation}</h3>
        <button onClick={handleIncrement}>Next</button> {/* Button triggers increment */}
      </div>
    </>
  );
};

export default CardLevel0;

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
    onIndexChange(true);
  };

  return (
    <>
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4">
        <img src="" alt="" className="mb-2" />
        <h3 className="text-xl font-semibold mb-2">{cardData.englishTranslation}</h3>
        <h3 className="text-xl mb-2">{cardData.spanishTranslation}</h3>
        <button onClick={handleIncrement} className="bg-pitahaya-yellow hover:bg-pitahaya-black text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Next</button> {/* Button triggers increment */}
      </div>
    </>
  );
};

export default CardLevel0;

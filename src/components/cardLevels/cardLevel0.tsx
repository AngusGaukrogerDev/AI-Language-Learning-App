import React from 'react';

interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  contextEnglish?: string;
  contextSpanish?: string;
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
      <div className="bg-white border rounded-lg p-16">
        <img src="" alt="" className="mb-2" />
        <h2 className='mb-2'>New word!</h2>
        <h3 className="text-xl font-semibold ">{cardData.englishTranslation}</h3>
        {cardData.contextEnglish != null ? <p className='text-sm italic mb-2'>{cardData.contextEnglish}</p> : <></>}
        <h3 className="text-xl font-semibold">{cardData.spanishTranslation}</h3>
        {cardData.contextSpanish != null ? <p className='text-sm italic mb-2'>{cardData.contextSpanish}</p> : <></>}
        <button onClick={handleIncrement} className="bg-pitahaya-yellow hover:bg-pitahaya-black text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Next</button> {/* Button triggers increment */}
      </div>
    </>
  );
};

export default CardLevel0;

import React from 'react';

interface Word {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
}

interface CardDisplayProps {
  words: Word[];
}

const CardDisplay: React.FC<CardDisplayProps> = ({ words }) => {
  return (
    <div className="lg:h-3/4 lg:w-1/4 gap-2 md:gap-5 justify-center items-center bg-pitahaya-white rounded-md">
      {words.map((word) => (
        <div key={word.id}>
          <p>ID: {word.id}</p>
          <p>English Translation: {word.englishTranslation}</p>
          <p>Spanish Translation: {word.spanishTranslation}</p>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;

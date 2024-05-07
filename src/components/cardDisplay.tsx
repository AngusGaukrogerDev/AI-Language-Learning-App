import React from 'react';

interface Word {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
}

interface UserWordsProgress {
  id: number;
  wordId: number;
  wordLevel: number;
  userId: number;
}

interface CardDisplayProps {
  words: Word[];
  userWordsProgress: UserWordsProgress[];
}

const CardDisplay: React.FC<CardDisplayProps> = ({ words, userWordsProgress }) => {
  return (
    <div className="lg:h-1/2 lg:w-1/4 gap-2 md:gap-5 justify-center items-center bg-pitahaya-white rounded-md">
      {words.map((word) => (
        <div key={word.id}>
          <p>ID: {word.id}</p>
          <p>English Translation: {word.englishTranslation}</p>
          <p>Spanish Translation: {word.spanishTranslation}</p>
        </div>
      ))}
      {userWordsProgress.map((userWordProgress) => (
        <div key={userWordProgress.id}>
          <p>WordID: {userWordProgress.wordId}</p>
          <p>UserID: {userWordProgress.userId}</p>
          <p>Word Level: {userWordProgress.wordLevel}</p>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;

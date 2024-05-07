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
  // Function to merge word and user progress
  const mergeObjects = (words: Word[], userWordsProgress: UserWordsProgress[]): any[] => {
    const mergedObjects: any[] = [];

    words.forEach(word => {
      const matchingProgress = userWordsProgress.find(progress => progress.wordId === word.id);
      if (matchingProgress) {
        mergedObjects.push({ ...word, ...matchingProgress });
      }
    });

    return mergedObjects;
  };

  const mergedData = mergeObjects(words, userWordsProgress);

  return (
    <div className="lg:h-auto lg:w-1/4 gap-2 md:gap-5 justify-center items-center bg-pitahaya-white rounded-md">
      {mergedData.map((item) => (
        <div className='my-1' key={item.id}>
          <p>ID: {item.id}</p>
          <p>English Translation: {item.englishTranslation}</p>
          <p>Spanish Translation: {item.spanishTranslation}</p>
          <p>WordID: {item.wordId}</p>
          <p>UserID: {item.userId}</p>
          <p>Word Level: {item.wordLevel}</p>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;

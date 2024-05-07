import React from 'react';
import CardLevel0 from './cardLevels/cardLevel0';
import CardLevel1 from './cardLevels/cardLevel1';
import CardLevel2 from './cardLevels/cardLevel2';
import CardLevel3 from './cardLevels/cardLevel3';
import CardLevel4 from './cardLevels/cardLevel4';
import CardLevel5 from './cardLevels/cardLevel5';

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
          {/* <p>ID: {item.id}</p>
          <p>English Translation: {item.englishTranslation}</p>
          <p>Spanish Translation: {item.spanishTranslation}</p>
          <p>WordID: {item.wordId}</p>
          <p>UserID: {item.userId}</p>
          <p>Word Level: {item.wordLevel}</p> */}
          {item.wordLevel == 0 && 
            <CardLevel0 cardData={item}/>
          }
          {item.wordLevel == 1 && 
            <CardLevel1 cardData={item}/>
          }
          {item.wordLevel == 2 && 
            <CardLevel2 cardData={item}/>
          }
          {item.wordLevel == 3 && 
            <CardLevel3 cardData={item}/>
          }
          {item.wordLevel == 4 && 
            <CardLevel4 cardData={item}/>
          }
          {item.wordLevel == 5 && 
            <CardLevel5 cardData={item}/>
          }
        </div>
      ))}
      
    </div>
  );
};

export default CardDisplay;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardLevel0 from './cardLevels/cardLevel0';
import CardLevel1 from './cardLevels/cardLevel1';
import CardLevel2 from './cardLevels/cardLevel2';
import CardLevel3 from './cardLevels/cardLevel3';
import CardLevel4 from './cardLevels/cardLevel4';
import CardLevel5 from './cardLevels/cardLevel5';
import Link from 'next/link';

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

interface HalfLifeState {
  halfLives: number[];
}

const CardDisplay: React.FC<CardDisplayProps> = ({ words, userWordsProgress }) => {
  const [index, setIndex] = useState<number>(0);
  const [halfLife] = useState<HalfLifeState>({ halfLives: [1, 1, 2, 3, 5, 8, 13, 21] });
  const [mergedData, setMergedData] = useState<any[]>([]);

  useEffect(() => {
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

    setMergedData(mergeObjects(words, userWordsProgress));
  }, [words, userWordsProgress]);

  const handleIndexChange = async (increment: boolean) => {
    if (mergedData.length === 0) return;

    const currentIndex = index;
    const updatedData = [...mergedData];
    const currentCard = updatedData[currentIndex];
    const updatedWordLevel = currentCard.wordLevel + (increment ? 1 : -1);
    const updatedNextReviewDate = calculateNextReviewDate(updatedWordLevel);

    try {
      await axios.post('/api/updateCardLevel', {
        id: currentCard.id,
        wordLevel: updatedWordLevel,
        nextReview: updatedNextReviewDate,
      });

      updatedData.splice(currentIndex, 1);
      setMergedData(updatedData);
      setIndex((prevIndex) => Math.max(0, Math.min(prevIndex, updatedData.length - 1)));
    } catch (error) {
      console.error('Error updating card level:', error);
    }
  };

  const calculateNextReviewDate = (halfLifeIndex: number): Date => {
    const P = 0.49;
    const halfLifeValue = halfLife.halfLives[halfLifeIndex];
    const nextReview = -halfLifeValue / Math.log(2) * Math.log(P);
    const today = new Date();
    const nextReviewDate = new Date(today);
    nextReviewDate.setDate(nextReviewDate.getDate() + nextReview);
    return nextReviewDate;
  };

  return (
    <div className="lg:h-auto lg:w-1/4 gap-2 md:gap-5 justify-center items-center bg-pitahaya-white rounded-md">
      {mergedData.length > 0 && mergedData.map((item, i) => (
        <div className='my-1' key={item.id} style={{ display: i === index ? 'block' : 'none' }}>
          {item.wordLevel === 0 && 
            <CardLevel0 cardData={item} onIndexChange={handleIndexChange} />
          }
          {item.wordLevel === 1 && 
            <CardLevel1 cardData={item} onIndexChange={handleIndexChange} />
          }
          {item.wordLevel === 2 && 
            <CardLevel2 cardData={item} onIndexChange={handleIndexChange} />
          }
          {item.wordLevel === 3 && 
            <CardLevel3 cardData={item} onIndexChange={handleIndexChange} />
          }
          {item.wordLevel === 4 && 
            <CardLevel4 cardData={item} onIndexChange={handleIndexChange} />
          }
          {item.wordLevel === 5 && 
            <CardLevel5 cardData={item} onIndexChange={handleIndexChange} />
          }
        </div>
      ))}
      {mergedData.length === 0 && (
        <div className='flex flex-col justify-center items-center h-screen w-full bg-pitahaya-light-grey'>
          <p>No cards due to review in this lesson</p>
          <Link href="/lessons">
            <button className='mt-2 bg-pitahaya-yellow text-white rounded-md px-4 py-2 w-full hover:bg-pitahaya-black transition duration-200 focus:outline-none'>Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;

interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  wordLevel: number;
}

interface CardLevel3Props {
  cardData: CardData;
}

const CardLevel3: React.FC<CardLevel3Props> = ({cardData}) => {
  return (
    <>
        <div className='my-2' key={cardData.id}>
          <p>LEVEL 3</p>
          
        </div>
    </>
  );
};

export default CardLevel3;
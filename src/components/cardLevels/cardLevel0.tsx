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
}

const CardLevel0: React.FC<CardLevel0Props> = ({cardData}) => {
  return (
    <>
        <div className='my-1' key={cardData.id}>
          <p>LEVEL 0</p>
          
        </div>
    </>
  );
};

export default CardLevel0;
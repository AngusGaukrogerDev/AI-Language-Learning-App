interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  wordLevel: number;
}

interface CardLevel1Props {
  cardData: CardData;
}

const CardLevel1: React.FC<CardLevel1Props> = ({cardData}) => {
  return (
    <>
        <div className='my-1' key={cardData.id}>
          <p>LEVEL 1</p>
          
        </div>
    </>
  );
};

export default CardLevel1;
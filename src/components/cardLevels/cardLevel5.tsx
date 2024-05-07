interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  wordLevel: number;
}

interface CardLevel5Props {
  cardData: CardData;
}

const CardLevel5: React.FC<CardLevel5Props> = ({cardData}) => {
  return (
    <>
        <div className='my-2' key={cardData.id}>
          <p>LEVEL 5</p>
          
        </div>
    </>
  );
};

export default CardLevel5;
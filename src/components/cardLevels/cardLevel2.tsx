interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  wordLevel: number;
}

interface CardLevel2Props {
  cardData: CardData;
}

const CardLevel2: React.FC<CardLevel2Props> = ({cardData}) => {
  return (
    <>
        <div className='my-2' key={cardData.id}>
          <p>LEVEL 2</p>
          
        </div>
    </>
  );
};

export default CardLevel2;
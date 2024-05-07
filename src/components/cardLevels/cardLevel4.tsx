interface CardData {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
  wordId: number;
  userId: number;
  wordLevel: number;
}

interface CardLevel4Props {
  cardData: CardData;
}

const CardLevel4: React.FC<CardLevel4Props> = ({cardData}) => {
  return (
    <>
        <div className='my-2' key={cardData.id}>
          <p>LEVEL 4</p>
          
        </div>
    </>
  );
};

export default CardLevel4;
import React from 'react';

interface CardDisplayProps {
  id: string; // Assuming id is of type number, adjust as needed
}

const CardDisplay: React.FC<CardDisplayProps> = ({ id }) => {
  return (
    <div className="lg:h-3/4 lg:w-1/4 gap-2 md:gap-5 justify-center items-center bg-pitahaya-white rounded-md">
      {/* You can use the id prop here */}
      <p>ID: {id}</p>
    </div>
  );
};

export default CardDisplay;

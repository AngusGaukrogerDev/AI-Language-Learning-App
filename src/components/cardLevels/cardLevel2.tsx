import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
  onIndexChange: (increment: boolean) => void; // Callback function type
}

const CardLevel2: React.FC<CardLevel2Props> = ({ cardData, onIndexChange }) => {
  const { register, handleSubmit, reset: resetFirstForm, formState: { errors: firstFormErrors } } = useForm();
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [firstFormSubmitted, setFirstFormSubmitted] = useState(false);
  const [correctAnswerEntered, setCorrectAnswerEntered] = useState(false);
  const { register: registerSecondForm, handleSubmit: handleSubmitSecondForm, reset: resetSecondForm, formState: { errors: secondFormErrors } } = useForm();

  const onSubmitFirstForm = (data: any) => {
    // Check if the provided translation matches the expected translation
    const correctTranslation = cardData.englishTranslation.toLowerCase().trim();
    const userResponse = data.translation.toLowerCase().trim();

    if (userResponse === correctTranslation) {
      onIndexChange(true); // Trigger increment callback
    } else {
      setShowCorrectAnswer(true); // Show the correct answer
    }
    setFirstFormSubmitted(true); // Mark first form as submitted
  };

  const onSubmitSecondForm = (data: any) => {
    // Check if the provided translation matches the expected translation
    const correctTranslation = cardData.englishTranslation.toLowerCase().trim();
    const userResponse = data.translation.toLowerCase().trim();

    if (userResponse === correctTranslation) {
      onIndexChange(false); // Trigger decrement callback
      resetSecondForm(); // Clear input field
      setCorrectAnswerEntered(true); // Mark correct answer as entered
    }
  };

  return (
    <>
      <div className='my-1  mx-auto p-16 bg-white rounded-lg shadow-lg'>
        <p className='text-lg font-semibold'>LEVEL 2</p>
        <p className='mt-2 text-pitahaya-black'>How would you write "{cardData.spanishTranslation}" in English?</p>
        <form onSubmit={handleSubmit(onSubmitFirstForm)} className='mt-4'>
          <input type="text" {...register("translation", { required: true })} disabled={firstFormSubmitted} className='border border-pitahaya-light-grey rounded-md px-4 py-2 w-full focus:outline-none focus:border-pitahaya-yellow' />
          <button type="submit" disabled={firstFormSubmitted} className='mt-2 bg-pitahaya-yellow text-white rounded-md px-4 py-2 w-full hover:bg-pitahaya-black transition duration-200 focus:outline-none'>Submit</button>
          {firstFormErrors.translation && <p className='mt-2 text-red-500'>Please enter a translation</p>}
        </form>
        {showCorrectAnswer && (
          <div className='mt-4'>
            <p className='text-red-500'>Incorrect! The correct answer is: "{cardData.englishTranslation}"</p>
            {correctAnswerEntered ? (
              <p className='mt-2 text-green-500'>Well done! You got it right.</p>
            ) : (
              <form onSubmit={handleSubmitSecondForm(onSubmitSecondForm)} className='mt-2'>
                <p className='text-pitahaya-black'>Type the correct answer to proceed:</p>
                <input type="text" {...registerSecondForm("translation", { required: true })} className='border border-pitahaya-light-grey rounded-md px-4 py-2 w-full mt-1 focus:outline-none focus:border-pitahaya-yellow' />
                <button type="submit" className='mt-2 bg-pitahaya-yellow text-white rounded-md px-4 py-2 w-full hover:bg-pitahaya-black transition duration-200 focus:outline-none'>Submit</button>
                {secondFormErrors.translation && <p className='mt-2 text-red-500'>Please enter the correct translation</p>}
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );  
};

export default CardLevel2;

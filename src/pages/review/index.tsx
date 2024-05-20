import Navbar from "@/components/navbar";
import { prisma } from "@/lib/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { withServerSideAuth } from '@clerk/nextjs/ssr'
import CardLevel3 from "@/components/cardLevels/cardLevel3";
import axios from 'axios';
import { useState } from "react";
import Link from 'next/link';

type Review = {
    id: number;
    wordId: number;
    wordLevel: number;
    nextReview: Date;
    userId: number;
};

type User = {
    id: number;
    email: string;
    clerkId: string;
} | null;

type CardInReview = {
    id: number;
    englishTranslation: string;
    spanishTranslation: string;
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Review: React.FC<Props> = ({ cardsInReview }) => {

    const [index, setIndex] = useState<number>(0);

    const handleIndexChange = async (increment: boolean) => {
        const currentIndex = index;
        const updatedIndex = increment ? currentIndex + 1 : currentIndex - 1;
        const currentCard = cardsInReview[currentIndex];
        const updatedWordLevel = currentCard.wordLevel + (increment ? 0 : -1)
        const updatedNextReviewDate = calculateNextReviewDate(updatedWordLevel);
    
        try {
          // Call the API route to update the card level
          await axios.post('/api/updateCardLevel', {
            id: currentCard.id,
            wordLevel: updatedWordLevel,
            nextReview: updatedNextReviewDate,
          });
          
          // Update local state
          setIndex(updatedIndex);
        } catch (error) {
          console.error('Error updating card level:', error);
        }
      };

      const calculateNextReviewDate = (halfLifeIndex: number): Date => {
        const halfLife = [1, 1, 2, 3, 5, 8, 13, 21];

        const P = 0.49; // Given value of P
        const halfLifeValue = halfLife[halfLifeIndex]; // Get the half-life value for the current card
    
        // Calculate next review date using the formula: P = 2^-(nextReview/halfLifeValue)
        // Rearranging the formula, nextReview = -halfLifeValue/ln(2) * ln(P)
        const nextReview = -halfLifeValue / Math.log(2) * Math.log(P);
    
        const today = new Date();
    
        // Add nextReview days to today's date
        const nextReviewDate = new Date(today);
        nextReviewDate.setDate(nextReviewDate.getDate() + nextReview);
    
        return nextReviewDate;
      }
      
    return (
        <>
            <Navbar />
            {console.log(cardsInReview)}
            <div className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey">
            {cardsInReview != 0 ?   
                <CardLevel3  cardData={cardsInReview[index]} onIndexChange={handleIndexChange} />
                :
                <div className='flex flex-col justify-center items-center gap-3'>                
                    <p>No cards due for review right now! Check back in the next few days.</p>
                    <Link legacyBehavior href="/dashboard" as="/dashboard" passHref>
                        <button className="py-2 px-4 rounded-md text-white bg-pitahaya-yellow cursor-pointer">
                            <a>Home</a>
                        </button>
                    </Link>
                </div>
            }
            </div>
        </>
    );
};

export default Review;

export const getServerSideProps: GetServerSideProps = withServerSideAuth(async (context) => {
    try {
        const { userId } = context.req.auth;

        if (!userId) {
            throw new Error("User ID not found");
        }
        
        const user: User = await prisma.user.findFirst({
            where:{
                clerkId: userId
            }
        });

        if (!user) {
            throw new Error("User not found");
        }

        const review: Review[] = await prisma.userWordProgress.findMany({
            where:{
                wordLevel: 6,
                userId: user?.id,
            }
        });

        // Extracting wordIds from review
        const wordIds = review.map(item => item.wordId);

        const cardsInReview: CardInReview[] = await prisma.word.findMany({
            where: {
                id: {
                    in: wordIds,
                },
            },
        });
        console.log(cardsInReview)
        
        return {
            props: {
                cardsInReview,
            },
        };
    } catch (error) {
        console.error("Error fetching lessons:", error);
        // Return an empty array if an error occurs
        return {
            props: {
                cardsInReview: [],
            },
        };
    }
});

import { useRouter } from 'next/router';
import Navbar from "@/components/navbar";
import CardDisplay from '@/components/cardDisplay';
import { GetServerSideProps, InferGetServerSidePropsType} from "next";
import { prisma } from "@/lib/prisma";
import React from 'react';

type Word = {
  id: number;
  englishTranslation: string;
  spanishTranslation: string;
};

type UserWordProgress = {
  id: number;
  wordId: number;
  wordLevel: number;
  userId: number | null;
  nextReview: Date;
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;


const LessonScreen: React.FC<Props> = ({ nextWords, userWordProgress }: Props) => {
  const router = useRouter();
  // Check if router.query.id exists before accessing its value
  const lessonId = router.query.id ? router.query.id.toString() : '';

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-3 bg-pitahaya-light-grey">
        <CardDisplay words={nextWords} userWordsProgress={userWordProgress} />
      </div>
    </>
  );
};

export default LessonScreen;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    if (!id || typeof id !== "string") {
      throw new Error("Invalid lesson ID");
    }
    
    const lessonId = parseInt(id);

    const words: Word[] = await prisma.word.findMany({
      where: {
        lessonId: lessonId
      }
    });
    const today = new Date();
    const userWordProgress: UserWordProgress[] = await prisma.userWordProgress.findMany({
      where: {
        wordId: {
          in: words.map(word => word.id)
        },
        nextReview: {
          lte: today
        }
      }
    });

    const wordsToReview = words.filter(word => {
      return userWordProgress.some(progress => progress.wordId === word.id);
    });

    // Convert nextReview to string
    const serializedUserWordProgress = userWordProgress.map(progress => ({
      ...progress,
      nextReview: progress.nextReview.toString() // Convert Date to ISO string
    }));

    return {
      props: {
        nextWords: wordsToReview,
        userWordProgress: serializedUserWordProgress // pass serialized userWordProgress here
      },
    };
  } catch (error) {
    console.error("Error fetching next word:", error);
    // Return an empty array if an error occurs
    return {
      props: {
        nextWords: [],
        userWordProgress: [] // return empty array for userWordProgress
      },
    };
  }
}

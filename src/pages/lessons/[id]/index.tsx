  import { useRouter } from 'next/router';
  import Navbar from "@/components/navbar";
  import CardDisplay from '@/components/cardDisplay';
  import { GetServerSideProps, InferGetServerSidePropsType} from "next";
  import { useAuth } from '@clerk/nextjs';
  import { prisma } from "@/lib/prisma";
  import React from 'react';
  import { withServerSideAuth } from '@clerk/nextjs/ssr'

  type User = {
    id: number;
    email: string;
    clerkId: string;
  } | null;

  type Word = {
    id: number;
    englishTranslation: string;
    spanishTranslation: string;
  };

  type UserWordProgress = {
    id: number;
    wordId: number;
    wordLevel: number;
    userId: number;
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

  export const getServerSideProps: GetServerSideProps = withServerSideAuth(async (context) => {
    try {
      const { userId } = context.req.auth
      
      const { id } = context.query;
      if (!userId) {
        throw new Error("User ID not found");
      }
      if (!id || typeof id !== "string") {
        throw new Error("Invalid lesson ID");
      }
      
      const lessonId = parseInt(id);

      const user: User = await prisma.user.findFirst({
        where:{
          clerkId: userId
        }
      })
      if (!user) {
        throw new Error("User not found");
      }
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
          },
          userId:{
            equals: user.id
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
  })

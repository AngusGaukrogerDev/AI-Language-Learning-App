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

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;


const LessonScreen: React.FC<Props> = ({ nextWords }: Props) => {
  const router = useRouter();
  // Check if router.query.id exists before accessing its value
  const lessonId = router.query.id ? router.query.id.toString() : '';

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-3 bg-pitahaya-light-grey">
        <CardDisplay words={nextWords} />
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
    return {
      props: {
        nextWords: words,
      },
    };
  } catch (error) {
    console.error("Error fetching next word:", error);
    // Return an empty array if an error occurs
    return {
      props: {
        nextWords: [],
      },
    };
  }
}

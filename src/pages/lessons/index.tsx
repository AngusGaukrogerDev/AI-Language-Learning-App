import Navbar from "@/components/navbar";
import { prisma } from "@/lib/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from 'next/link';

type Lesson = {
  id: number;
  name: string;
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Lessons: React.FC<Props> = ({ lessons }: Props) => {
  return (
    <>
      <Navbar />
      <div className="top-0 w-full h-screen flex flex-col justify-center items-center gap-3 bg-pitahaya-light-grey">
        <h2>Lessons</h2>
        {lessons && lessons.map((lesson: Lesson) => (
          <Link key={lesson.id} legacyBehavior href="/lessons/[id]" as={`/lessons/${lesson.id}`} passHref>
            <button className="py-2 px-4 rounded-md text-white bg-pitahaya-yellow cursor-pointer" key={lesson.id}>
              <a>{lesson.name}</a>
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Lessons;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const lessons: Lesson[] = await prisma.lesson.findMany();
    return {
      props: {
        lessons,
      },
    };
  } catch (error) {
    console.error("Error fetching lessons:", error);
    // Return an empty array if an error occurs
    return {
      props: {
        lessons: [],
      },
    };
  }
};

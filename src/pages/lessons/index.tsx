import Navbar from "@/components/navbar";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "@/lib/prisma";
import Link from 'next/link';

// Define the type for a single lesson
type Lesson = {
  id: number;
  name: string;
  // Add more properties if necessary
};

// Infer the props type for the component
type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Lessons: React.FC<Props> = ({ lessons }: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-3 bg-pitahaya-light-grey">
        <h2>Lessons</h2>
        {lessons && lessons.map((lesson: Lesson) => (
          <Link legacyBehavior href={"/lessons/" + lesson.id} passHref>
            <h2 className="py-2 px-4 rounded-md text-white bg-pitahaya-yellow" key={lesson.id}>
              <a>{lesson.name}</a>
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Lessons;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    // Fetch lessons from the database
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

import Navbar from "@/components/navbar";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {prisma} from "@/lib/prisma"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Lessons: React.FC = ({user}: Props) => {
  return (
    <>
        <Navbar />
        <div className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey">
            <h2>Lessons</h2>
            <h3>{user?.name}</h3>
        </div>
    </>
  );
};

export default Lessons;

export const getServerSideProps: GetServerSideProps = async(context) => {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com',
    }
  })
  return{
    props: {
      user
    }
  }
} 
import Navbar from "@/components/navbar";

const Lessons: React.FC = () => {
  return (
    <>
        <Navbar />
        <div className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey">
            <h2>Lessons</h2>
        </div>
    </>
  );
};

export default Lessons;
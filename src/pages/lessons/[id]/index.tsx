import { useRouter } from 'next/router';
import Navbar from "@/components/navbar";
import React from 'react';

const LessonScreen: React.FC = () => {
  const router = useRouter();
  // Check if router.query.id exists before accessing its value
  const lessonId = router.query.id ? router.query.id.toString() : '';

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-3 bg-pitahaya-light-grey">
        <h2>{lessonId}</h2>
      </div>
    </>
  );
};

export default LessonScreen;

import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(userId)
  if (isLoaded) {
    router.push('/dashboard'); // Redirect to dashboard if user is authenticated
    return null; // Render nothing while redirecting
  }

  return (
    <>
      <Navbar />
      <main className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey z-0">
        <div className="top-0 flex flex-col justify-center items-center gap-3 w-3/4 xl:w-1/2 text-center">
          <h2>Hello! Welcome to the Pitahaya Learning Platform</h2>
          <div className="w-full flex flex-row justify-center items-center gap-3 xl:gap-5">
            <Link legacyBehavior href="/sign-in">
              <a className="bg-pitahaya-yellow text-pitahaya-white px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14 hover:cursor-pointer transition duration-300 transform hover:scale-110">
                <h3>Sign In</h3>
              </a>
            </Link>
            <Link legacyBehavior href="/sign-up">
              <a className="bg-pitahaya-white text-pitahaya-black border-pitahaya-black border-1 px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14 flex flex-col justify-center items-center hover:cursor-pointer transition duration-300 transform hover:scale-110">
                <h3>Sign Up</h3>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

import Navbar from '@/components/navbar';
import {Button} from '@nextui-org/react'
import Link from "next/link";

export default function Home() {
  

  return (
    <>
      <Navbar />
      <main className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey z-0">
        <div className='top-0 flex flex-col justify-center items-center gap-3 w-3/4 text-center'>
          <h2>Hello! Welcome to the Pitahaya Learning Platform</h2>
          <div className='w-full flex flex-row justify-center items-center gap-3 xl:gap-5'>
              <Link legacyBehavior href="/sign-in" as="/sign-in" >
                  <button className=" bg-pitahaya-yellow text-pitahaya-white px-4 py-2  rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer transition duration-300 transform hover:scale-110">
                      <h3>Sign In</h3>
                  </button>                  
              </Link>
              <Link legacyBehavior href="/sign-up" as="/sign-up" >
                  <button className=" bg-pitahaya-white text-pitahaya-black border-pitahaya-black border-1 px-4 py-2  rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer transition duration-300 transform hover:scale-110">
                      <h3>Sign Up</h3>
                  </button>                  
              </Link>
          </div>
        </div>
      </main>
    </>
  )
}


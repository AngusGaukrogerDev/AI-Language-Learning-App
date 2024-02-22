import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col items-end pt-2 pr-2">
        <UserButton afterSignOutUrl="/" />
      </header>
      <main className="w-full h-screen flex flex-col justify-center items-center">

      </main>
    </>
  )
}


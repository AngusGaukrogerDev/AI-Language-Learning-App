import ClerkUserHeader from '@/components/clerkUserHeader'
import {Button} from '@nextui-org/react'

export default function Home() {
  

  return (
    <>
      <ClerkUserHeader />
      <main className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Paragraph</p>
    </div>
      </main>
    </>
  )
}


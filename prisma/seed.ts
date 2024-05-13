import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    // Create or update a user with a specific email
    const user = await prisma.user.upsert({
      where: { email: 'new@new.com' },
      update: {},
      create: {
        email: 'new@new.com',
        name: 'New User',
        clerkId: 'user_2dmaHlfVa1HcXuHfDBNChIExhsz'
      }
    })

    // Display the created or updated user
    console.log('User created or updated:', user)

    // Add example lessons and words
    const lesson1 = await prisma.lesson.upsert({
      where: { name: 'Lesson 1' },
      update: {},
      create: {
        name: 'Lesson 1',
      }
    })

    const lesson2 = await prisma.lesson.upsert({
      where: { name: 'Lesson 2' },
      update: {},
      create: {
        name: 'Lesson 2',
      }
    })

    // Add example words
    const word1 = await prisma.word.create({
      data: {
        englishTranslation: 'hello',
        spanishTranslation: 'hola',
        lessonId: lesson1.id,
      }
    })

    const word2 = await prisma.word.create({
      data: {
        englishTranslation: 'goodbye',
        spanishTranslation: 'adiós',
        lessonId: lesson2.id,
      }
    })

    console.log('Example lessons and words created.')

  } catch (error) {
    console.error('Error seeding the database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Call the seeding function
seedDatabase()

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUser = (email: string) => prisma.user.findFirst({
  where: {
    email,
  }
})
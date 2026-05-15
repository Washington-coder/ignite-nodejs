import { prisma } from '@/lib/prisma'
import type { Prisma } from 'generated/prisma/client'

export class PrismaUserRepository {
  async create(data: Prisma.UserCreateInput) {
    await prisma.user.create({
      data,
    })
  }
}

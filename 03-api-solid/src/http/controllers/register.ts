import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { hash } from 'bcryptjs'
import { RegisterUseCase } from '../use-cases/register'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '../use-cases/errors/user-already-exists-error'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const prismaUsersRepository = new PrismaUserRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    await registerUseCase.execute({
      name,
      email,
      password,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    return reply.status(500).send() // TODO fix me later
  }

  return reply.status(201).send()
}

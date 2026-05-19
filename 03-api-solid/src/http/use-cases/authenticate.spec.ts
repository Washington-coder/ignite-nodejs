import { expect, describe, test, it, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { compare, hash } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let usersRepository = new InMemoryUsersRepository()
let sut = new AuthenticateUseCase(usersRepository)

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123', 6),
    })

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '123',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should be able to authenticate with wrong password', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123', 6),
    })

    await expect(() =>
      sut.execute({
        email: 'johndoe@example.com',
        password: '1231231',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})

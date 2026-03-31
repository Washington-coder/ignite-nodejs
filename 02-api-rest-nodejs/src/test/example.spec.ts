import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { app } from '../app.js'
import request from 'supertest'
import { knex } from '../database.js'

describe('Transactions routes', () => {
  beforeAll(async () => {
    await knex.migrate.latest()
    await app.ready()
  })

  afterAll(async () => {
    await knex.destroy()
    await app.close()
  })

  beforeEach(async () => {
    await knex('transactions').del()
  })

  it('user can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'Freelancer',
        amount: 8000,
        type: 'credit',
      })
      .expect(201)
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Freelancer',
        amount: 8000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie') ?? []

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'Freelancer',
        amount: 8000,
      }),
    ])
  })
})

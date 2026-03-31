import { afterAll, beforeAll, test } from 'vitest'
import { app } from '../app.js'
import request from 'supertest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('user can create a new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'Freelancer',
      amount: 8000,
      type: 'credit',
    })
    .expect(201)
})

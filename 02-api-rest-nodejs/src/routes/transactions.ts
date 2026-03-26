import type { FastifyInstance } from 'fastify'
import { knex } from '../database.js'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions').select('*')

    return transactions
  })
}

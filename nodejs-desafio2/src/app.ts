import fastify from 'fastify'

export const app = fastify()

app.get('/', async (request, reply) => {
  return { status: 'ok', message: 'Daily API is running!' }
})

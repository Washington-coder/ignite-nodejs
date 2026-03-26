import fastify from 'fastify'
import { env } from './env/index.js'
import { transactionsRoutes } from './routes/transactions.js'

const app = fastify()

app.register(transactionsRoutes)

// O listen no Fastify v4+ usa um objeto com a propriedade 'port'
app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server Running!')
})

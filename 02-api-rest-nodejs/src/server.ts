import { app } from './app.js'
import { env } from './env/index.js'

// O listen no Fastify v4+ usa um objeto com a propriedade 'port'
app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server Running!')
})

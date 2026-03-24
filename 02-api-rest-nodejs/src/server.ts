import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

// O listen no Fastify v4+ usa um objeto com a propriedade 'port'
app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running!')
})

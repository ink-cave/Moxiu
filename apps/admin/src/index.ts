import Fastify from 'fastify'

const server = Fastify({ logger: true })

server.get('/api/health', async () => {
  return { status: 'ok', service: '@moxiu/admin' }
})

server.get('/', async () => {
  return { message: 'Welcome to moxiu admin backend' }
})

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3001
    await server.listen({ port })
    server.log.info(`Server listening on ${port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()

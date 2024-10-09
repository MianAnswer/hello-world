import http from 'http'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const httpServer = http.createServer(app)
const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

process.on('unhandledRejection', (error) => {
  console.error(error)
  process.exit(1)
})

process.on('uncaughtException', (error) => {
  console.error(error)
  process.exit(1)
})

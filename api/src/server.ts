import http from 'http'
import dotenv from 'dotenv'
import app from './app'
import logger from './utils/logger'

dotenv.config()

const httpServer = http.createServer(app)
const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
  logger.info(`listening on: http://localhost:${PORT}`)
})

process.on('unhandledRejection', (error) => {
  logger.error(error)
  process.exit(1)
})

process.on('uncaughtException', (error) => {
  logger.error(error)
  process.exit(1)
})

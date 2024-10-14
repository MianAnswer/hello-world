import http from 'http'
import app from './app'
import logger from './utils/logger'
import config from './config/config'

const httpServer = http.createServer(app)
const PORT = config.port

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

import { createLogger, format, transports } from 'winston'
import config from '../config/config'
import { Environment } from '../config/environment'

function getLogLevel(env: Environment): string {
  switch (env) {
    case Environment.DEV:
      return 'debug'
    case Environment.PROD:
      return 'info'
    case Environment.TEST:
      return 'error'
    default:
      return 'debug'
  }
}

const logLevel = getLogLevel(config.environment)

const formatOption = format.combine(
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}]: ${message}`
  }),
)

const transportsOptions = [
  new transports.Console(),
  new transports.File({ filename: 'error.log', level: 'error' }),
  new transports.File({ filename: 'combined.log' }),
]

const logger = createLogger({
  level: logLevel,
  format: formatOption,
  transports: transportsOptions,
})

export default logger

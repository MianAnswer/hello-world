import dotenv from 'dotenv'
import { getEnvironment } from './environment'
import checkRequiredEnvVars from './environmentValidation'

dotenv.config()

// Check for required environment variables
checkRequiredEnvVars()

const environment = getEnvironment(process.env.NODE_ENV || 'development')

export const config = {
  port: Number(process.env.PORT) || 8080,
  environment,
}

export default config

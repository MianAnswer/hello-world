const requiredEnvVars = ['PORT', 'NODE_ENV']

const checkRequiredEnvVars = () => {
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    missingVars.forEach((varName) => {
      console.error(`Missing required environment variable: ${varName}`)
    })
    throw new Error('Missing required environment variables')
  }
}

export default checkRequiredEnvVars

export const enum Environment {
  DEV,
  PROD,
  TEST,
  UNKNOWN
}

export function getEnvironment(str: string): Environment {
  switch (str.toLowerCase()) {
    case 'development':
      return Environment.DEV
    case 'production':
      return Environment.PROD
    case 'test':
      return Environment.TEST
    default:
      return Environment.UNKNOWN
  }
}

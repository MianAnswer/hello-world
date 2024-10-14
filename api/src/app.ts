import express, {
  Request, Response, NextFunction, ErrorRequestHandler,
} from 'express'
import router from './routes/router'
import logger from './utils/logger'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

// Error-handling middleware for JSON parsing errors
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    logger.error(`Bad JSON: ${err.message}`)
    res.status(400).send({ error: 'Invalid JSON' })
  } else {
    next(err)
  }
})

app.use((req, res) => {
  res.status(404).end()
})

export default app

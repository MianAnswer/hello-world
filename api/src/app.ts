import express, {
  Request, Response, NextFunction, ErrorRequestHandler,
} from 'express'
import dotenv from 'dotenv'
import router from './routes/router'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

// Error-handling middleware for JSON parsing errors
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    console.error('Bad JSON')
    res.status(400).send({ error: 'Invalid JSON' })
  } else {
    next(err)
  }
})

app.use((req, res) => {
  res.status(404).end()
})

app.listen(PORT, () => {
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

import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use('/', router)

app.use((req, res) => {
  res.status(404).end()
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

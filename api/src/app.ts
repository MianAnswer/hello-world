import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.status(200).send(req.url)
})

app.use((req, res) => {
  res.status(404).end()
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

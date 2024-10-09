import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.status(200).send('Hello, user!')
})

userRouter.post('/', (req, res) => {
  res.status(200).send('Hello, registration!')
})

export default userRouter

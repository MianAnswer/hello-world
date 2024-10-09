import { Router } from 'express'
import userSchema from '../schemas/user-schema'

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.status(200).send('Hello, user!')
})

userRouter.post('/', (req, res) => {
  const { error, value } = userSchema.validate(req.body)

  if (error) {
    res.status(400).send(error.details[0].message)
  } else {
    res.status(200).send(value)
  }
})

export default userRouter

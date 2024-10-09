import Joi from 'joi'

const userSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'any.required': 'Email is a required field',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Password should be a type of text',
    'string.empty': 'Password cannot be an empty field',
    'string.min': 'Password should have a minimum length of {#limit}',
    'any.required': 'Password is a required field',
  }),
  name: Joi.string(),
}).options({ stripUnknown: true })

export default userSchema

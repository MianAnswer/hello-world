import { describe, it, expect } from '@jest/globals'
import request from 'supertest'
import app from '../../src/app'

describe('GET /user', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/user')
    expect(response.status).toEqual(200)
  })
})

describe('POST /user', () => {
  it('should return 201', async () => {
    const body = { email: 'Alice@gmail.com', password: 'helloworld123', age: 30 }
    const response = await request(app).post('/user')
      .send(body)
    expect(response.status).toEqual(201)
    expect(response.body).toBeDefined()
    expect(response.body.email).toEqual(body.email)
    expect(response.body.age).toBeUndefined()
  })
})

import { describe, it, expect } from '@jest/globals'
import request from 'supertest'
import app from '../src/app'

describe('GET /', () => {
  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/')
    expect(response.status).toEqual(404)
  })
})

import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from '@/infra/app.module'
import request from 'supertest'

describe('CREATE user register (E2E)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    await app.init()
  })

  it('should to be [POST]/registers', async () => {
    const response = await request(app.getHttpServer())
      .post('/registers')
      .send({
        name: 'John Doe',
        username: 'john_where',
        password: '123456',
      })
    expect(response.statusCode).toBe(201)
  })
})

import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import request from 'supertest'
import { hash } from 'bcryptjs'

describe('AUTH user (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  it('should to be [POST]/sessions', async () => {
    await prisma.user.create({
      data: {
        name: 'Arthur Sousa',
        username: 'arthur_uzumaki',
        password: await hash('12345678', 8),
      },
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      username: 'arthur_uzumaki',
      password: '12345678',
    })

    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({
      access_token: expect.any(String),
    })
  })
})

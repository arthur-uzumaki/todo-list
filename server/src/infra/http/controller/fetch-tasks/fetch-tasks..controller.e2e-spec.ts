import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import { AppModule } from '@/infra/app.module'
import request from 'supertest'
import { hash } from 'bcryptjs'

describe('Fetch tasks [E2E]', () => {
  let app: INestApplication
  let jwt: JwtService
  let prisma: PrismaService
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    jwt = await app.get(JwtService)
    prisma = await app.get(PrismaService)

    await app.init()
  })

  it('should be able [GET]/tasks', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        username: 'john_where',
        password: await hash('123456', 8),
      },
    })

    const accessToken = jwt.sign({ sub: user.id })

    const response = await request(app.getHttpServer())
      .get('/tasks')
      .set(`Authorization`, `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
  })
})

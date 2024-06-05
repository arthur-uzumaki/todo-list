import { INestApplication } from '@nestjs/common'
import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import { Test } from '@nestjs/testing'
import { JwtService } from '@nestjs/jwt'
import request from 'supertest'
import { hash } from 'bcryptjs'

describe('create task [E2E]', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = moduleRef.get(PrismaService)
    jwt = moduleRef.get(JwtService)
    await app.init()
  })

  it('should be able create task [POST]', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        username: 'john_where',
        password: await hash('123456', 8),
      },
    })

    const accessToken = jwt.sign({ sub: user.id })
    const response = await request(app.getHttpServer())
      .post('/tasks')
      .set(`Authorization`, ` Bearer ${accessToken}`)
      .send({
        title: 'Chamada com o Cliente',
        description: 'Atualizar o cliente sobre o progresso do projeto',
        startAt: '2024-06-13T11:00:00',
        endAt: '2024-06-13T12:00:00',
        priority: 'Alta',
      })
    expect(response.statusCode).toBe(201)
  })
})

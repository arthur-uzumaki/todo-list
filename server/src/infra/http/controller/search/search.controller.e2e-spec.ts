import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import { AppModule } from '@/infra/app.module'
import request from 'supertest'
import { hash } from 'bcryptjs'

describe('Search [E2E]', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    prisma = await app.get(PrismaService)
    jwt = await app.get(JwtService)

    await app.init()
  })

  it('should be able GET tasks/search/title?=', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        username: 'john_where',
        password: await hash('123456', 8),
      },
    })
    const task = await prisma.task.create({
      data: {
        userId: user.id,
        title: 'Finalizar o relatório do projeto',
        description:
          'Concluir e revisar o relatório do projeto antes da reunião final.',
        startAt: new Date('2024-06-01T09:00:00'),
        endAt: new Date('2024-06-01T17:00:00'),
        priority: 'Alta',
      },
    })

    const accessToken = jwt.sign({ sub: user.id })

    const response = await request(app.getHttpServer())
      .get(`/tasks/search/title?title=${task.title}`)
      .set(`Authorization`, `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
  })
})

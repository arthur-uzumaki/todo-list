import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import { AppModule } from '@/infra/app.module'
import { hash } from 'bcryptjs'
import request from 'supertest'

describe('Fetch one Task [E2E]', () => {
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

  it('should be able [GET]/tasks/taskId', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        username: 'john_where',
        password: await hash('123456', 8),
      },
    })

    const accessToken = jwt.sign({ sub: user.id })

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

    const response = await request(app.getHttpServer())
      .get(`/tasks/${task.id}`)
      .set(`Authorization`, `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
  })
})

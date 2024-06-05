import { CreateTask } from '@/Domain/application/use-cases/create-task'
import { ZodValidadePipes } from '@/infra/pipes/zod-validade-pipe'
import { Body, Controller, Post } from '@nestjs/common'
import { CurrentUserDecorator } from '@/infra/auth/current-user-decorator'
import { z } from 'zod'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { TaskViewModel } from '@/infra/http/view-model/task-view-model'

const taskSchema = z
  .object({
    title: z.string().min(5),
    description: z.string().min(5).max(240),
    startAt: z.string(),
    endAt: z.string(),
    priority: z.string().min(1),
  })
  .superRefine((field, ctx) => {
    if (field.startAt && !field.endAt) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        path: ['endAt'],
        message: 'Selecione uma data final',
      })
    }
    if (new Date(field.startAt).getTime() > new Date(field.endAt).getTime()) {
      ctx.addIssue({
        path: ['endAt'],
        code: z.ZodIssueCode.invalid_date,
        message: 'Data final deve ser maio que a inicial ',
      })
    }
  })

const pipe = new ZodValidadePipes(taskSchema)

type TaskSchema = z.infer<typeof taskSchema>

@Controller('/tasks')
export class CreateTaskController {
  constructor(private readonly createTask: CreateTask) {}

  @Post()
  async create(
    @Body(pipe) body: TaskSchema,
    @CurrentUserDecorator() userPayload: UserPayload,
  ) {
    const { title, description, endAt, priority, startAt } = body

    const userId = userPayload.sub

    const { task } = await this.createTask.execute({
      userId,
      title,
      description,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
      priority,
    })

    return TaskViewModel.toViewModel(task)
  }
}

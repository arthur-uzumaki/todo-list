import { GetOneTask } from '@/Domain/application/use-cases/get-one-task'
import { ZodValidadePipes } from '@/infra/pipes/zod-validade-pipe'
import { BadRequestException, Controller, Get, Param } from '@nestjs/common'
import { z } from 'zod'
import { TaskViewModel } from '@/infra/http/view-model/task-view-model'

const taskSchema = z.string().uuid()

type TaskSchema = z.infer<typeof taskSchema>

const pipe = new ZodValidadePipes(taskSchema)

@Controller('/tasks')
export class FetchOneTaskController {
  constructor(private readonly fetchOneTask: GetOneTask) {}

  @Get('/:id')
  async handle(@Param('id', pipe) param: TaskSchema) {
    const taskId = param

    if (!taskId) {
      throw new BadRequestException('Not found task')
    }

    const { task } = await this.fetchOneTask.execute({
      taskId,
    })

    return TaskViewModel.toViewModel(task)
  }
}

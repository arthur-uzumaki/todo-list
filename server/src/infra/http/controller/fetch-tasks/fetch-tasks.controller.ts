import { GetTask } from '@/Domain/application/use-cases/get-task'
import { Controller, Get } from '@nestjs/common'
import { TaskViewModel } from '@/infra/http/view-model/task-view-model'
import { CurrentUserDecorator } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'

@Controller('/tasks')
export class FetchTasksController {
  constructor(private readonly fetchTasks: GetTask) {}

  @Get()
  async handle(@CurrentUserDecorator() user: UserPayload) {
    const { tasks } = await this.fetchTasks.execute({
      userId: user.sub,
    })

    return {
      tasks: tasks.map(TaskViewModel.toViewModel),
    }
  }
}

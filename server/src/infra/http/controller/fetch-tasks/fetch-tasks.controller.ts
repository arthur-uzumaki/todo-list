import { GetTask } from '@/Domain/application/use-cases/get-task'
import { Controller, Get } from '@nestjs/common'
import { TaskViewModel } from '@/infra/http/view-model/task-view-model'

@Controller('/tasks')
export class FetchTasksController {
  constructor(private readonly fetchTasks: GetTask) {}

  @Get()
  async get() {
    const { tasks } = await this.fetchTasks.execute()

    return tasks.map(TaskViewModel.toViewModel)
  }
}

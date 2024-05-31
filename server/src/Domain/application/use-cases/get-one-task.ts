import { TaskRepository } from '@/Domain/application/repositories/task-repository'
import { Task } from '@/Domain/application/entities/task'
import { BadRequest } from '@/Domain/application/use-cases/_errors/bad-request'
import { Injectable } from '@nestjs/common'

interface GetOneTaskRequest {
  taskId: string
}

interface GetOneTaskResponse {
  task: Task
}
@Injectable()
export class GetOneTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({ taskId }: GetOneTaskRequest): Promise<GetOneTaskResponse> {
    const task = await this.taskRepository.findById(taskId)

    if (!task) {
      throw new BadRequest('Not found task')
    }

    return {
      task,
    }
  }
}

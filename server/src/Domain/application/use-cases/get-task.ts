import { Task } from '@/Domain/application/entities/task'
import { TaskRepository } from '@/Domain/application/repositories/task-repository'
import { Injectable } from '@nestjs/common'

interface GetTaskResponse {
  tasks: Task[]
}
@Injectable()
export class GetTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(): Promise<GetTaskResponse> {
    const tasks = await this.taskRepository.findAll()

    return {
      tasks,
    }
  }
}

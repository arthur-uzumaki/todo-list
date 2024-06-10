import { Task } from '@/Domain/application/entities/task'
import { TaskRepository } from '@/Domain/application/repositories/task-repository'
import { Injectable } from '@nestjs/common'

interface GetTaskRequest {
  userId: string
}

interface GetTaskResponse {
  tasks: Task[]
}
@Injectable()
export class GetTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({ userId }: GetTaskRequest): Promise<GetTaskResponse> {
    const tasks = await this.taskRepository.findAll(userId)

    return {
      tasks,
    }
  }
}

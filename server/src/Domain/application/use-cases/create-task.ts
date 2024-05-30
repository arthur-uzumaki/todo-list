import { TaskRepository } from '@/Domain/application/repositories/task-repository'
import { Injectable } from '@nestjs/common'
import { Task } from '@/Domain/application/entities/task'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Description } from '@/Domain/application/entities/valueObject/description'

interface CreateTaskRequest {
  userId: string
  title: string
  description: string
  startAt: Date
  endAt: Date
  priority: string
}

interface CreateTaskResponse {
  task: Task
}

@Injectable()
export class CreateTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({
    userId,
    title,
    description,
    startAt,
    priority,
    endAt,
  }: CreateTaskRequest): Promise<CreateTaskResponse> {
    const task = Task.create({
      userId: new UniqueEntityId(userId),
      title,
      description: new Description(description),
      startAt,
      endAt,
      priority,
    })

    await this.taskRepository.create(task)

    return {
      task,
    }
  }
}

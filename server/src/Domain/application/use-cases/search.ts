import { TaskRepository } from '@/Domain/application/repositories/task-repository'
import { Injectable } from '@nestjs/common'
import { Task } from '@/Domain/application/entities/task'
import { BadRequest } from '@/Domain/application/use-cases/_errors/bad-request'

interface SearchRequest {
  title: string
}

interface SearchResponse {
  tasks: Task[]
}

@Injectable()
export class Search {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute({ title }: SearchRequest): Promise<SearchResponse> {
    const tasks = await this.taskRepository.findManyTaskSearch(title)

    if (!tasks) {
      throw new BadRequest('Search not found')
    }

    return {
      tasks,
    }
  }
}

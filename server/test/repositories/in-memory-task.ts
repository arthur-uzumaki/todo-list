import { Task } from '@/Domain/application/entities/task'
import { TaskRepository } from '@/Domain/application/repositories/task-repository'

export class InMemoryTask implements TaskRepository {
  public tasks: Task[] = []

  async findById(taskId: string): Promise<Task | null> {
    return this.tasks.find((item) => item.id.toString() === taskId)
  }

  async create(task: Task): Promise<void> {
    this.tasks.push(task)
  }

  async findManyTaskSearch(title: string): Promise<Task[]> {
    return this.tasks.filter((item) => item.title === title)
  }

  async findAll(): Promise<Task[]> {
    return this.tasks.map((item) => item)
  }
}

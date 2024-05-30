import { Task } from '@/Domain/application/entities/task'

export abstract class TaskRepository {
  abstract findById(taskId: string): Promise<Task | null>
  abstract create(task: Task): Promise<void>
  abstract findManyTaskSearch(title: string): Promise<Task[]>
  abstract findAll(): Promise<Task[]>
}

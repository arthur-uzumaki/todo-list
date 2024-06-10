import { Task } from '@/Domain/application/entities/task'

export class TaskViewModel {
  static toViewModel(task: Task) {
    return {
      id: task.id.toString(),
      title: task.title,
      description: task.description.value,
      startAt: task.startAt,
      endAt: task.endAt,
      priority: task.priority,
      createAt: task.createdAt,
    }
  }
}

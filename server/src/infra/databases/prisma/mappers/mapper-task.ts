import { Task } from '@/Domain/application/entities/task'
import { Description } from '@/Domain/application/entities/valueObject/description'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Task as RawTask } from '@prisma/client'

export class MapperTask {
  static toPrisma(task: Task) {
    return {
      id: task.id.toString(),
      userId: task.userId.toString(),
      title: task.title,
      description: task.description.value,
      startAt: task.startAt,
      endAt: task.endAt,
      priority: task.priority,
      createdAt: task.createdAt,
    }
  }

  static toDomain(raw: RawTask) {
    return Task.create(
      {
        userId: new UniqueEntityId(raw.userId),
        title: raw.title,
        description: new Description(raw.description),
        startAt: raw.startAt,
        endAt: raw.endAt,
        priority: raw.priority,
        createdAt: raw.createdAt,
      },
      new UniqueEntityId(raw.id),
    )
  }
}

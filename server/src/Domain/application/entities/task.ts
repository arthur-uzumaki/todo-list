import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Replace } from '@/utils/replace'
import { Description } from './valueObject/description'

export interface TaskProps {
  userId: UniqueEntityId
  title: string
  description: Description
  startAt: Date
  endAt: Date
  priority: string
  createdAt: Date
}

export class Task extends Entity<TaskProps> {
  public get userId(): UniqueEntityId {
    return this.props.userId
  }

  public get title(): string {
    return this.props.title
  }

  public set title(title: string) {
    this.props.title = title
  }

  public get description(): Description {
    return this.props.description
  }

  public set description(description: Description) {
    this.props.description = description
  }

  public get startAt(): Date {
    return this.props.startAt
  }

  public set startAt(startAt: Date) {
    this.props.startAt = startAt
  }

  public get endAt(): Date {
    return this.props.endAt
  }

  public set endAt(endAt: Date) {
    this.props.endAt = endAt
  }

  public get priority(): string {
    return this.props.priority
  }

  public set priority(priority: string) {
    this.props.priority = priority
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  static create(
    props: Replace<TaskProps, { createdAt?: Date }>,
    id?: UniqueEntityId,
  ) {
    const task = new Task(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return task
  }
}

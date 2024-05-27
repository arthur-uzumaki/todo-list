import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export class Entity<Props> {
  private _id: UniqueEntityId
  protected props: Props

  public get id(): UniqueEntityId {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityId) {
    this._id = id ?? new UniqueEntityId()
    this.props = props
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) {
      return true
    }

    if (entity.id === entity._id) {
      return true
    }

    return false
  }
}

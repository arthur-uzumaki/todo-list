import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface UserProps {
  name: string
  username: string
  password: string
}

export class User extends Entity<UserProps> {
  public get name(): string {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get username(): string {
    return this.props.username
  }

  public set username(username: string) {
    this.props.username = username
  }

  public get password(): string {
    return this.props.password
  }

  public set password(password: string) {
    this.props.password = password
  }

  static create(props: UserProps, id?: UniqueEntityId) {
    const user = new User(props, id)

    return user
  }
}

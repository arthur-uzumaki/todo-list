import { User } from '@/Domain/application/entities/user'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { User as UserRaw } from '@prisma/client'
export class MapperUser {
  static toPrisma(user: User) {
    return {
      id: user.id.toString(),
      name: user.name,
      username: user.username,
      password: user.password,
    }
  }

  static toDomain(raw: UserRaw) {
    return User.create(
      {
        name: raw.name,
        username: raw.username,
        password: raw.password,
      },
      new UniqueEntityId(raw.id),
    )
  }
}

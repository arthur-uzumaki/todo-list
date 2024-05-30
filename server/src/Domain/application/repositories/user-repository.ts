import { User } from '@/Domain/application/entities/user'

export abstract class UserRepository {
  abstract findById(userId: string): Promise<User | null>
  abstract create(user: User): Promise<void>
  abstract findByUsername(username: string): Promise<User | null>
}

import { User } from '@/Domain/application/entities/user'
import { UserRepository } from '@/Domain/application/repositories/user-repository'

export class InMemoryUser implements UserRepository {
  public user: User[] = []

  async create(user: User): Promise<void> {
    this.user.push(user)
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.user.find((item) => item.username === username)
  }
}

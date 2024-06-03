import { User } from '@/Domain/application/entities/user'
import { UserRepository } from '@/Domain/application/repositories/user-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import { MapperUser } from '@/infra/databases/prisma/mappers/mapper-user'

@Injectable()
export class UserRepositoryPrisma implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const raw = MapperUser.toPrisma(user)

    await this.prisma.user.create({
      data: raw,
    })
  }

  async findById(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!user) {
      return null
    }

    return MapperUser.toDomain(user)
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (!user) {
      return null
    }

    return MapperUser.toDomain(user)
  }
}

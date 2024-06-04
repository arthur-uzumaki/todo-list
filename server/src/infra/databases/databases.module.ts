import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import { UserRepository } from '@/Domain/application/repositories/user-repository'
import { UserRepositoryPrisma } from '@/infra/databases/prisma/repositories/user-repository-prisma'
import { TaskRepository } from '@/Domain/application/repositories/task-repository'
import { TaskRepositoryPrisma } from '@/infra/databases/prisma/repositories/task-repository-prisma'

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: UserRepositoryPrisma,
    },
    {
      provide: TaskRepository,
      useClass: TaskRepositoryPrisma,
    },
  ],
  exports: [UserRepository, TaskRepository],
})
export class DatabasesModule {}

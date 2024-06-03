import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'
import { UserRepository } from '@/Domain/application/repositories/user-repository'
import { UserRepositoryPrisma } from '@/infra/databases/prisma/repositories/user-repository-prisma'

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: UserRepositoryPrisma,
    },
  ],
  exports: [UserRepository],
})
export class DatabasesModule {}

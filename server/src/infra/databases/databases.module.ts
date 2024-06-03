import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/databases/prisma/prisma.service'

@Module({
  providers: [PrismaService],
})
export class DatabasesModule {}

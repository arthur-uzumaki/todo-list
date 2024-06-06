import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { FetchOneTaskController } from '@/infra/http/controller/fetch-one-task/fetch-one-task.controller'
import { GetOneTask } from '@/Domain/application/use-cases/get-one-task'

@Module({
  imports: [DatabasesModule],
  controllers: [FetchOneTaskController],
  providers: [GetOneTask],
})
export class FetchOneTaskModule {}

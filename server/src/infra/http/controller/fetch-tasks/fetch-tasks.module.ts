import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { GetTask } from '@/Domain/application/use-cases/get-task'
import { FetchTasksController } from '@/infra/http/controller/fetch-tasks/fetch-tasks.controller'
@Module({
  imports: [DatabasesModule],
  controllers: [FetchTasksController],
  providers: [GetTask],
})
export class FetchTasksModule {}

import { Module } from '@nestjs/common'
import { CreateTaskController } from '@/infra/http/controller/create-task/create-task.controller'
import { DatabasesModule } from '@/infra/databases/databases.module'
import { CreateTask } from '@/Domain/application/use-cases/create-task'

@Module({
  imports: [DatabasesModule],
  controllers: [CreateTaskController],
  providers: [CreateTask],
})
export class CreateTaskModule {}

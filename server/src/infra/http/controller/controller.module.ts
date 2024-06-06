import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { RegisterModule } from '@/infra/http/controller/register/register.module'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
import { AuthUserModule } from '@/infra/http/controller/auth-user/auth-user.module'
import { CreateTaskModule } from '@/infra/http/controller/create-task/create-task.module'
import { FetchTasksModule } from '@/infra/http/controller/fetch-tasks/fetch-tasks.module'

@Module({
  imports: [
    DatabasesModule,
    RegisterModule,
    CryptographyModule,
    AuthUserModule,
    CreateTaskModule,
    FetchTasksModule,
  ],
})
export class ControllerModule {}

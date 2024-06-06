import { Module } from '@nestjs/common'
import { RegisterModule } from '@/infra/http/controller/register/register.module'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
import { AuthUserModule } from '@/infra/http/controller/auth-user/auth-user.module'
import { CreateTaskModule } from '@/infra/http/controller/create-task/create-task.module'
import { FetchTasksModule } from '@/infra/http/controller/fetch-tasks/fetch-tasks.module'
import { FetchOneTaskModule } from '@/infra/http/controller/fetch-one-task/fetch-one-task.module'

@Module({
  imports: [
    RegisterModule,
    CryptographyModule,
    AuthUserModule,
    CreateTaskModule,
    FetchTasksModule,
    FetchOneTaskModule,
  ],
})
export class ControllerModule {}

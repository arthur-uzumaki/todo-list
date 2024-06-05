import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { RegisterModule } from '@/infra/http/controller/register/register.module'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
import { AuthUserModule } from '@/infra/http/controller/auth-user/auth-user.module'
import { CreateTaskModule } from '@/infra/http/controller/create-task/create-task.module'

@Module({
  imports: [
    DatabasesModule,
    RegisterModule,
    CryptographyModule,
    AuthUserModule,
    CreateTaskModule,
  ],
})
export class ControllerModule {}

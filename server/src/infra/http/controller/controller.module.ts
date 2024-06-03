import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { RegisterModule } from '@/infra/http/controller/register/register.module'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
import { AuthUserModule } from '@/infra/http/controller/auth-user/auth-user.module'

@Module({
  imports: [
    DatabasesModule,
    RegisterModule,
    CryptographyModule,
    AuthUserModule,
  ],
})
export class ControllerModule {}

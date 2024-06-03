import { AuthenticateUser } from '@/Domain/application/use-cases/authenticate-user'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { AuthenticateUserController } from '@/infra/http/controller/auth-user/authenticate-user.controller'

@Module({
  imports: [DatabasesModule, CryptographyModule],
  controllers: [AuthenticateUserController],
  providers: [AuthenticateUser],
})
export class AuthUserModule {}

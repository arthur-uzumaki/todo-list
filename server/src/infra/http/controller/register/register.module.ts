import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { RegisterController } from '@/infra/http/controller/register/register.controller'
import { RegisterUser } from '@/Domain/application/use-cases/registe-user'

@Module({
  imports: [DatabasesModule, CryptographyModule],
  controllers: [RegisterController],
  providers: [RegisterUser],
})
export class RegisterModule {}

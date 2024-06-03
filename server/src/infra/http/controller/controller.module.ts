import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { RegisterModule } from '@/infra/http/controller/register/register.module'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'

@Module({
  imports: [DatabasesModule, RegisterModule, CryptographyModule],
})
export class ControllerModule {}

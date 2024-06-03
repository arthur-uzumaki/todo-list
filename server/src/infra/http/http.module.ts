import { Module } from '@nestjs/common'
import { ControllerModule } from '@/infra/http/controller/controller.module'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
@Module({
  imports: [ControllerModule, CryptographyModule],
})
export class HttpModule {}

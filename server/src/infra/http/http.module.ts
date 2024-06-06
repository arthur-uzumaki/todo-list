import { Module } from '@nestjs/common'
import { ControllerModule } from '@/infra/http/controller/controller.module'
@Module({
  imports: [ControllerModule],
})
export class HttpModule {}

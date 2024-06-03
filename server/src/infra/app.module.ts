import { Module } from '@nestjs/common'
import { DatabasesModule } from '@/infra/databases/databases.module'
import { HttpModule } from '@/infra/http/http.module'

@Module({
  imports: [DatabasesModule, HttpModule],
})
export class AppModule {}

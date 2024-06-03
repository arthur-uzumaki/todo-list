import { Module } from '@nestjs/common'
import { HttpModule } from '@/infra/http/http.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from '@/infra/env/env'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    HttpModule,
    AuthModule,
  ],
})
export class AppModule {}

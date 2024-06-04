import { Env } from '@/infra/env/env'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { z } from 'zod'

const tokenSchema = z.object({
  sub: z.string().uuid(),
})

export type Token = z.infer<typeof tokenSchema>

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService<Env, true>) {
    const publicKey = config.get('JWT_PUBLIC_KEY', {
      infer: true,
    })
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64').toString('utf-8'),
      algorithms: ['RS256'],
    })
  }

  async validate(payload: Token) {
    return tokenSchema.parse(payload)
  }
}

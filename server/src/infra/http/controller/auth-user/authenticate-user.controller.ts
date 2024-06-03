import { AuthenticateUser } from '@/Domain/application/use-cases/authenticate-user'
import { Public } from '@/infra/auth/public'
import { ZodValidadePipes } from '@/infra/pipes/zod-validade-pipe'
import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { z } from 'zod'

const authSchema = z.object({
  username: z.string(),
  password: z.string(),
})

type AuthSchema = z.infer<typeof authSchema>

const pipe = new ZodValidadePipes(authSchema)

@Controller('/sessions')
export class AuthenticateUserController {
  constructor(private readonly authUser: AuthenticateUser) {}

  @Post()
  @Public()
  async auth(@Body(pipe) body: AuthSchema) {
    const { username, password } = body

    const isUsernameInvalid = username
    const isPasswordInvalid = password

    if (!isUsernameInvalid || !isPasswordInvalid) {
      throw new BadRequestException(
        'username invalid, or password invalidade, checks the credencias.',
      )
    }

    const result = await this.authUser.execute({
      username,
      password,
    })

    const { accessToken } = result

    return {
      access_token: accessToken,
    }
  }
}

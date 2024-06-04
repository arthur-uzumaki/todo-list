import { RegisterUser } from '@/Domain/application/use-cases/registe-user'
import { Public } from '@/infra/auth/public'
import { ZodValidadePipes } from '@/infra/pipes/zod-validade-pipe'
import { Body, Controller, Post } from '@nestjs/common'
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(6),
})

type UserSchema = z.infer<typeof userSchema>

const pipes = new ZodValidadePipes(userSchema)

@Controller('/registers')
export class RegisterController {
  constructor(private readonly register: RegisterUser) {}

  @Post()
  @Public()
  async create(@Body(pipes) body: UserSchema) {
    const { name, username, password } = body

    await this.register.execute({
      name,
      username,
      password,
    })
  }
}

import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Token } from '@/infra/auth/jwt.strategy'

export const CurrentUserDecorator = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()

    return request.user as Token
  },
)

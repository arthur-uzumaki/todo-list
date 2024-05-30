import { Injectable } from '@nestjs/common'
import { HashCompare } from '@/Domain/application/cryptography/hash-comparer'
import { UserRepository } from '@/Domain/application/repositories/user-repository'
import { Encrypter } from '@/Domain/application/cryptography/encrypter'
import { BadRequest } from '@/Domain/application/use-cases/_errors/bad-request'

interface AuthenticateUserRequest {
  username: string
  password: string
}

interface AuthenticateUserResponse {
  accessToken: string
}

@Injectable()
export class AuthenticateUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashCompare: HashCompare,
    private readonly encrypt: Encrypter,
  ) {}

  async execute({
    username,
    password,
  }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const user = await this.userRepository.findByUsername(username)

    const isPasswordValid = await this.hashCompare.compare(
      password,
      user.password,
    )

    if (!isPasswordValid) {
      throw new BadRequest('password invalid')
    }

    const accessToken = await this.encrypt.encrypt({
      sub: user.id.toString(),
    })

    return {
      accessToken,
    }
  }
}

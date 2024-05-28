import { Injectable } from '@nestjs/common'
import { User } from '@/Domain/application/entities/user'
import { UserRepository } from '@/Domain/application/repositories/user-repository'
import { HashGenerator } from '@/Domain/application/cryptography/hash-generator'

interface RegisterUserRequest {
  name: string
  username: string
  password: string
}

interface RegisterUserResponse {
  user: User
}

@Injectable()
export class RegisterUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hasGenerator: HashGenerator,
  ) {}

  async execute({
    name,
    password,
    username,
  }: RegisterUserRequest): Promise<RegisterUserResponse> {
    const hashedPassword = await this.hasGenerator.has(password)

    const user = User.create({
      name,
      username,
      password: hashedPassword,
    })

    await this.userRepository.create(user)

    return {
      user,
    }
  }
}

import { User, UserProps } from '@/Domain/application/entities/user'

type Override = Partial<UserProps>

export function MakeUser(override: Override = {}) {
  return User.create({
    name: 'Johndo',
    username: 'johndo_3g',
    password: '123456',
    ...override,
  })
}

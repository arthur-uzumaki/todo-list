import { FakeEncrypter } from '@/cryptography/fake-encrypter'
import { FakeHash } from '@/cryptography/fake-hash'
import { InMemoryUser } from '@/repositories/in-memory-user'
import { AuthenticateUser } from '@/Domain/application/use-cases/authenticate-user'
import { MakeUser } from '@/factoreis/make-user'
import { BadRequest } from '@/Domain/application/use-cases/_errors/bad-request'

describe('authenticate user', () => {
  let inMemory: InMemoryUser
  let fakeHasher: FakeHash
  let fakeEncrypt: FakeEncrypter

  let authUser: AuthenticateUser

  beforeEach(() => {
    inMemory = new InMemoryUser()
    fakeHasher = new FakeHash()
    fakeEncrypt = new FakeEncrypter()

    authUser = new AuthenticateUser(inMemory, fakeHasher, fakeEncrypt)
  })

  it('should be able authenticate with the user', async () => {
    const make = MakeUser({
      username: 'johndo_3g',
      password: await fakeHasher.has('123456'),
    })

    inMemory.create(make)

    const result = await authUser.execute({
      username: 'johndo_3g',
      password: '123456',
    })

    expect(result).toBeTruthy()
    expect(result.accessToken).toEqual(expect.any(String))
  })

  it('should not be able authenticate with username invalid', async () => {
    const make = MakeUser({
      username: 'johndo_3g',
      password: await fakeHasher.has('123456'),
    })

    inMemory.create(make)
    expect(() => {
      return authUser.execute({
        username: 'jo_3g',
        password: '123456',
      })
    }).rejects.toThrow(BadRequest)
  })

  it('should not be able authenticate user with password invalid', async () => {
    const make = MakeUser({
      username: 'johndo_3g',
      password: await fakeHasher.has('123456'),
    })

    inMemory.create(make)
    expect(() => {
      return authUser.execute({
        username: 'johndo_3g',
        password: '123456789',
      })
    }).rejects.toThrow(BadRequest)
  })
})

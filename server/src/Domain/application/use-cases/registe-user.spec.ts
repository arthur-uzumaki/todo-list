import { FakeHash } from '@/cryptography/fake-hash'
import { InMemoryUser } from '@/repositories/in-memory-user'
import { RegisterUser } from '@/Domain/application/use-cases/registe-user'
import { BadRequest } from '@/Domain/application/use-cases/_errors/bad-request'

describe('registe user', () => {
  let inMemoryUser: InMemoryUser
  let fakeHasher: FakeHash

  beforeEach(() => {
    inMemoryUser = new InMemoryUser()
    fakeHasher = new FakeHash()
  })

  it('should be able registe user', async () => {
    const registeUser = new RegisterUser(inMemoryUser, fakeHasher)

    const { user } = await registeUser.execute({
      name: 'Arthur Sousa',
      username: 'arthur_satouro',
      password: '123456',
    })

    expect(user).toBeTruthy()
    expect(inMemoryUser.user[0]).toEqual(user)
  })

  it('should not be able register with username unique', async () => {
    const registeUser = new RegisterUser(inMemoryUser, fakeHasher)

    await registeUser.execute({
      name: 'Arthur Sousa',
      username: 'arthur_satouro',
      password: '123456',
    })

    expect(() => {
      return registeUser.execute({
        name: 'Arthur Sousa',
        username: 'arthur_satouro',
        password: '123456',
      })
    }).rejects.toThrow(BadRequest)
  })
})

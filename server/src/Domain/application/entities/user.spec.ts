import { User } from './user'

describe('create user ', () => {
  it('should be able create a user', () => {
    const user = User.create({
      name: 'Arthur',
      username: 'arthur_satouro',
      password: '123456',
    })
    expect(user).toBeTruthy()
  })
})

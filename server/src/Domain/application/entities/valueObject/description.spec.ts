import { Description } from './description'

describe('Task descriptions', () => {
  it('should be able to create a task description', () => {
    const description = new Description(
      'Você precisa cria uma classe java pra armazenar uma lista de produtos no banco de dados',
    )
    expect(description).toBeTruthy()
  })

  it('should not  able to create a task description with less than 5 characters', () => {
    expect(() => new Description('twa')).toThrow()
  })

  it('should not  able to create a task description with more  than 240 characters', () => {
    expect(() => new Description('twa'.repeat(241))).toThrow()
  })
})

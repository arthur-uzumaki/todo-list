import { InMemoryTask } from '@/repositories/in-memory-task'
import { Search } from '@/Domain/application/use-cases/search'
import { makeTask } from '@/factoreis/make-task'
import { BadRequest } from '@/Domain/application/use-cases/_errors/bad-request'

describe('search task', () => {
  let inMemory: InMemoryTask
  let search: Search

  beforeEach(() => {
    inMemory = new InMemoryTask()
    search = new Search(inMemory)
  })

  it('should be able search one task', async () => {
    const task1 = makeTask({ title: 'dsadsfdsfds' })
    await inMemory.create(task1)

    const { tasks } = await search.execute({
      title: task1.title,
    })

    expect(tasks).toHaveLength(1)
    expect(tasks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          priority: 'Alta',
          endAt: new Date('04/11/2024'),
        }),
      ]),
    )
  })

  it('should not be able search one tasks with title invalidade', async () => {
    expect(() => {
      return search.execute({
        title: 'asa',
      })
    }).rejects.toThrow(BadRequest)
  })
})

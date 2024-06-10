import { InMemoryTask } from '@/repositories/in-memory-task'
import { GetTask } from '@/Domain/application/use-cases/get-task'
import { makeTask } from '@/factoreis/make-task'

describe('get task', () => {
  let inMemory: InMemoryTask
  let getTask: GetTask

  beforeEach(() => {
    inMemory = new InMemoryTask()
    getTask = new GetTask(inMemory)
  })

  it('should be able get tasks', async () => {
    const task1 = makeTask()

    await inMemory.create(task1)

    const { tasks } = await getTask.execute({
      userId: '8061182d-c356-443b-b639-4e23bcb80747',
    })

    expect(tasks).toHaveLength(1)
    expect(tasks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Gravação de aula',
          startAt: new Date('03/11/2024'),
        }),
      ]),
    )
  })
})

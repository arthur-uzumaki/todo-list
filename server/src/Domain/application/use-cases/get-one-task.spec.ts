import { InMemoryTask } from '@/repositories/in-memory-task'
import { GetOneTask } from '@/Domain/application/use-cases/get-one-task'
import { makeTask } from '@/factoreis/make-task'
import { BadRequest } from '@/Domain/application/use-cases/_errors/bad-request'

describe(' fetch one task', () => {
  let inMemory: InMemoryTask
  let getOneTask: GetOneTask

  beforeEach(() => {
    inMemory = new InMemoryTask()
    getOneTask = new GetOneTask(inMemory)
  })

  it('should be able fetch get one task', async () => {
    const task1 = makeTask()
    await inMemory.create(task1)

    const { task } = await getOneTask.execute({
      taskId: task1.id.toString(),
    })

    expect(task).toBeTruthy()
  })

  it('should not be able fetch task id invalid', async () => {
    return expect(() => {
      return getOneTask.execute({
        taskId: '1',
      })
    }).rejects.toThrow(BadRequest)
  })
})

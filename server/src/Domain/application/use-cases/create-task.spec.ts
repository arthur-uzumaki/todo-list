import { InMemoryTask } from '@/repositories/in-memory-task'
import { CreateTask } from '@/Domain/application/use-cases/create-task'

describe('create task', () => {
  let inMemoryTask: InMemoryTask

  let createTask: CreateTask

  beforeEach(() => {
    inMemoryTask = new InMemoryTask()

    createTask = new CreateTask(inMemoryTask)
  })

  it('should be able create task', async () => {
    const { task } = await createTask.execute({
      userId: '1',
      title: 'Finalizar o relatório do projeto',
      description:
        'Concluir e revisar o relatório do projeto antes da reunião final.',
      startAt: new Date('2024-06-01T09:00:00'),
      endAt: new Date('2024-06-01T17:00:00'),
      priority: 'Alta',
    })

    expect(task).toBeTruthy()
    expect(inMemoryTask.tasks[0]).toBe(task)
  })
})

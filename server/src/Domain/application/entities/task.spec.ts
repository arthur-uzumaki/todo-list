import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Task } from './task'
import { Description } from './valueObject/description'

describe('create task', () => {
  it('should be able create task', () => {
    const task = Task.create({
      userId: new UniqueEntityId(),
      title: 'Gravação de aula',
      description: new Description(
        'Tarefa para gravar aula de Tasks do Curso de Nestjs',
      ),
      priority: 'Alta',
      startAt: new Date(),
      endAt: new Date('28/05/2024'),
    })
    expect(task).toBeTruthy()
  })
})

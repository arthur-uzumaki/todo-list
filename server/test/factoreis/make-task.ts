import { Task, TaskProps } from '@/Domain/application/entities/task'
import { Description } from '@/Domain/application/entities/valueObject/description'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

type Override = Partial<TaskProps>

export function makeTask(override: Override = {}) {
  return Task.create({
    userId: new UniqueEntityId('8061182d-c356-443b-b639-4e23bcb80747'),
    title: 'Gravação de aula',
    description: new Description(
      'Tarefa para gravar aula de Tasks do Curso de Nestjs',
    ),
    priority: 'Alta',
    startAt: new Date('03/11/2024'),
    endAt: new Date('04/11/2024'),
    ...override,
  })
}

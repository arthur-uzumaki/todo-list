import { Search } from '@/Domain/application/use-cases/search'
import { ZodValidadePipes } from '@/infra/pipes/zod-validade-pipe'
import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { TaskViewModel } from '@/infra/http/view-model/task-view-model'
import { z } from 'zod'

const queryTitleSchema = z.string()

const pipe = new ZodValidadePipes(queryTitleSchema)

type QueryTitleSchema = z.infer<typeof queryTitleSchema>

@Controller('/tasks')
export class SearchController {
  constructor(private readonly search: Search) {}

  @Get('/search/title')
  async handle(@Query('title', pipe) title: QueryTitleSchema) {
    const { tasks } = await this.search.execute({
      title,
    })

    if (!tasks) {
      throw new BadRequestException('Tasks not found')
    }

    return tasks.map(TaskViewModel.toViewModel)
  }
}

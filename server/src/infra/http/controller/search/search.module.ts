import { Search } from '@/Domain/application/use-cases/search'
import { DatabasesModule } from '@/infra/databases/databases.module'
import { Module } from '@nestjs/common'
import { SearchController } from '@/infra/http/controller/search/search.controller'

@Module({
  imports: [DatabasesModule],
  controllers: [SearchController],
  providers: [Search],
})
export class SearchModule {}

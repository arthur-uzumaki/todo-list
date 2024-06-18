import { Suspense } from 'react'
import { CurrentSearch } from './current-search'
import { CardSkeleton } from '@/components/card-skeleton'

export default function LoadingSearch() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={false}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

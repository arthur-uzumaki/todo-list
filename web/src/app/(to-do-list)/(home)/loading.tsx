import { CardSkeleton } from '@/components/card-skeleton'

export default function LoadingHome() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}

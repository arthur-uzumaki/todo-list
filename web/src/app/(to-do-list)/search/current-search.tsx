'use client'

import { useSearchParams } from 'next/navigation'

export function CurrentSearch() {
  const searchParams = useSearchParams()
  const query = searchParams.get('title')
  return (
    <h1>
      Resultado para: <span className="font-semibold">{query}</span>
    </h1>
  )
}

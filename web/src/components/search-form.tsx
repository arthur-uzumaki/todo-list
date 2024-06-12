'use client'

import { FormEvent } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('title')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.title

    if (!query) {
      return null
    }

    return router.push(`/search?title=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] gap-3 items-center rounded-full 
    bg-zinc-900 px-5 py-3 ring-zinc-700 "
    >
      <Input
        name="title"
        defaultValue={query ?? ''}
        className="flex-1 text-sm placeholder:text-zinc-500 outline-none 
        bg-transparent border border-transparent focus-visible:border-transparent "
        placeholder="Buscar tasks...."
      />
      <Search className="w-5 h-5 text-zinc-500" />
    </form>
  )
}

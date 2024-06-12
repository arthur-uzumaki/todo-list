import Link from 'next/link'
import { ClipboardList } from 'lucide-react'
import { Separator } from './ui/separator'
import { Profile } from './profile'
import { SearchForm } from './search-form'
import { Suspense } from 'react'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devtodo
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-zinc-100" />
          <Link
            href="/tasks/cadastrar"
            className="underline font-bold leading-relaxed text-sm"
          >
            Mais tarefa
          </Link>
        </div>
        <Separator orientation="vertical" className="h-4 bg-zinc-600" />
        <Profile />
      </div>
    </header>
  )
}

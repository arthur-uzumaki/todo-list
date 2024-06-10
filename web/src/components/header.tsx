import Link from 'next/link'
import { Input } from './ui/input'
import { Search, ClipboardList } from 'lucide-react'
import { Separator } from './ui/separator'
import { Profile } from './profile'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devtodo
        </Link>

        <form className="flex w-[320px] gap-3 items-center rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 ">
          <Input
            className="flex-1 text-sm placeholder:text-zinc-500 outline-none bg-transparent border border-transparent focus-visible:border-transparent "
            placeholder="Buscar tasks...."
          />
          <Search className="w-5 h-5 text-zinc-500" />
        </form>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-zinc-100" />
          <Link
            href="/"
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

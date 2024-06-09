import Link from 'next/link'
import { Input } from './ui/input'
import { Search, ClipboardList } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

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
        <span>Olá 🖐️, ronaldo </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 m-2 bg-zinc-900 border border-zinc-800 ">
            <DropdownMenuLabel className="text-white font-bold ">
              Minha conta
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="bg-zinc-500" />

            <DropdownMenuItem>
              <Link
                href="/api/auth/logout"
                className="text-base font-medium text-red-500"
              >
                Sair
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { getUser } from '@/lib/auth'

export function Profile() {
  const { username } = getUser()
  return (
    <>
      <span>Olá 🖐️,{username} </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild id="dropdown-menu-trigger">
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
    </>
  )
}

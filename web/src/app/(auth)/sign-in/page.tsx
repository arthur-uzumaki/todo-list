import { LoginUser } from '@/components/auth/login-user'
import { BackgroundDiv } from '@/components/backgroundDiv'
import Link from 'next/link'

export const metadata = {
  title: 'Login',
}
export default function SignIn() {
  return (
    <main className="max-h-[860px]  w-full grid grid-cols-2 gap-20">
      <BackgroundDiv />
      <div>
        <h1 className="text-3xl font-bold">Login</h1>
        <LoginUser />
        <Link className="flex gap-1 text-zinc-400 mt-5 " href="/sing-up">
          Não possui conta? <span className="underline ">cria uma agora</span>
        </Link>
      </div>
    </main>
  )
}

import { BackgroundDiv } from '@/components/backgroundDiv'
import { FormAuth } from '@/components/auth/form-auth'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className="max-h-[860px]  w-full grid grid-cols-2 gap-20">
      <BackgroundDiv />
      <div>
        <h1 className="text-3xl font-bold">Login</h1>

        <FormAuth
          labelUsername="Digite seu username"
          labelPassword="Password"
          buttonName="Login"
        />
        <Link className="flex gap-1 text-zinc-400 mt-5 " href="/sing-up">
          Não possui conta? <span className="underline ">cria uma agora</span>
        </Link>
      </div>
    </div>
  )
}

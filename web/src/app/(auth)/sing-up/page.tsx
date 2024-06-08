import { RegisterUser } from '@/components/auth/register-user'
import { BackgroundDiv } from '@/components/backgroundDiv'

export default function SingUp() {
  return (
    <div className="max-h-[860px]  w-full grid grid-cols-2 gap-20">
      <BackgroundDiv />

      <div>
        <h1 className="text-3xl font-bold leading-snug  ">
          {' '}
          Registra um usuário
          <RegisterUser />
        </h1>
      </div>
    </div>
  )
}

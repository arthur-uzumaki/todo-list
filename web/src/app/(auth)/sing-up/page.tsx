import { BackgroundDiv } from '@/components/backgroundDiv'
import { FormAuth } from '@/components/auth/form-auth'

export default function SingUp() {
  return (
    <div className="max-h-[860px]  w-full grid grid-cols-2 gap-20">
      <BackgroundDiv />

      <div>
        <h1 className="text-3xl font-bold leading-snug ">
          {' '}
          Registra um usuário
        </h1>

        <FormAuth
          labelName="Digite seu Nome completo"
          labelUsername="Digite seu username "
          labelPassword="Password"
          buttonName="Registrar"
        />
      </div>
    </div>
  )
}
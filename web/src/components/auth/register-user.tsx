'use client'
import { FormAuth, UserSchema } from '@/components/auth/form-auth'
import { useToast } from '../ui/use-toast'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export function RegisterUser() {
  const { toast } = useToast()
  const route = useRouter()

  async function handleRegisterUsers(data: UserSchema) {
    try {
      const validateOneHors = 60 * 60
      const response = await api('/registers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        next: {
          revalidate: validateOneHors,
        },
      })

      if (response.status !== 201) {
        return toast({
          variant: 'destructive',
          title: 'Credenciais inválidas',
          description: 'Por favor verifica todos os campos',
        })
      }
      if (response.status === 201) {
        route.push('/sign-in')
        return toast({
          variant: 'default',
          title: 'Cadastro realizado com sucesso',
          description: 'Registro salvo com sucesso no banco de dados ',
        })
      }
    } catch (error) {
      console.error(error)

      return toast({
        variant: 'destructive',
        title: 'Erro de conexão',
        description: 'Não foi possível conectar com servidor',
      })
    }
  }

  return (
    <FormAuth
      method={handleRegisterUsers}
      labelName="Digite seu Nome completo"
      labelUsername="Digite seu username "
      labelPassword="Senha"
      buttonName="Registrar"
    />
  )
}

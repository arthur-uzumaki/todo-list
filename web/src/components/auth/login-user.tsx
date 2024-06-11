'use client'
import { FormAuth, UserSchema } from '@/components/auth/form-auth'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import Cookies from 'js-cookie'
export function LoginUser() {
  const { toast } = useToast()
  const route = useRouter()

  async function handleLoginUser(handleLoginUser: UserSchema) {
    try {
      const validateOneHors = 60 * 60
      const response = await api('/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(handleLoginUser),
        next: {
          revalidate: validateOneHors,
        },
      })

      if (response.status !== 201) {
        return toast({
          variant: 'destructive',
          title: 'Credenciais inválidas',
          description: 'Por favor verifica seu username e senha',
        })
      }

      const { access_token } = await response.json()

      Cookies.set('accessToken', access_token)

      return route.push('/')
    } catch (error) {
      console.error('Erro de conexão:', error)

      return toast({
        variant: 'destructive',
        title: 'Erro de conexão',
        description: 'Não foi possível conectar ao servidor',
      })
    }
  }
  return (
    <FormAuth
      method={handleLoginUser}
      labelUsername="Digite seu username"
      labelPassword="Senha"
      buttonName="Login"
    />
  )
}

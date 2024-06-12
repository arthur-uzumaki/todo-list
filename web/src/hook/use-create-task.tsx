import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import { useForm } from 'react-hook-form'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
const taskSchema = z
  .object({
    title: z
      .string()
      .min(5, { message: 'Você precisa colocar pelo memos 5 caracteres.' }),
    description: z
      .string()
      .min(5, { message: 'Pelo menos 5 caracteres.' })
      .max(240, { message: 'Máximo de 240 caracteres.' }),
    startAt: z.string().min(1, { message: 'Selecione a data de inicio.' }),
    endAt: z.string().min(1, { message: 'Selecione uma data final.' }),
    priority: z.string().min(1, { message: 'Selecione a prioridade.' }),
  })
  .superRefine((field, ctx) => {
    if (field.startAt && !field.endAt) {
      ctx.addIssue({
        path: ['endAt'],
        code: z.ZodIssueCode.invalid_date,
        message: 'Você precisa colocar uma data final. ',
      })
    }

    if (new Date(field.startAt).getTime() > new Date(field.endAt).getTime()) {
      ctx.addIssue({
        path: ['endAt'],
        code: z.ZodIssueCode.invalid_date,
        message: 'Data final deve ser maior que data inicial.',
      })
    }
  })

type TaskSchema = z.infer<typeof taskSchema>

export function useCreateTask() {
  const router = useRouter()
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskSchema>({
    resolver: zodResolver(taskSchema),
  })

  async function handleCreateTask(data: TaskSchema) {
    try {
      const validadeOneHors = 60 * 60
      const accessToken = Cookies.get('accessToken')
      const response = await api('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify(data),
        next: {
          revalidate: validadeOneHors,
        },
      })

      if (response.status !== 201) {
        return toast({
          title: 'Verifica as credencias',
          description: 'Por favor verifica todos os campos',
          variant: 'destructive',
        })
      }

      if (response.status === 201) {
        router.push('/')
        return toast({
          title: 'Criação realizado com sucesso',
          description: 'Tarefa criado com sucesso no banco de dados',
          variant: 'default',
        })
      }
    } catch (error) {
      console.error(error)

      return toast({
        title: 'Erro de conexão',
        description: 'Não foi possível conectar com servidor',
        variant: 'destructive',
      })
    }
  }

  return {
    handleSubmit,
    handleCreateTask,
    register,
    errors,
  }
}

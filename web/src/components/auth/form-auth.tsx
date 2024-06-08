'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const userSchema = z.object({
  name: z.string().min(6, 'Precisa colocar seu nome completo').optional(),
  username: z.string().min(1, 'Precisa colocar username'),
  password: z.string().min(6, 'Precisa colocar pelo menos 6 caracteres'),
})

export type UserSchema = z.infer<typeof userSchema>

interface FormAuthProps {
  labelName?: string
  labelUsername: string
  labelPassword: string
  buttonName: string
  method: (data: UserSchema) => void
}
export function FormAuth({
  labelName,
  labelUsername,
  labelPassword,
  buttonName,
  method,
}: FormAuthProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  })

  return (
    <form
      className="max-w-sm gap-4 mt-10 flex items-stretch flex-col w-full"
      onSubmit={handleSubmit(method)}
    >
      {labelName && (
        <div className="w-full  flex flex-col gap-4">
          <Label htmlFor="name">{labelName}</Label>
          <Input
            placeholder="Digite seu nome"
            id="name"
            {...register('name')}
          />

          {errors.name && (
            <span className="text-red-400 text-base">
              {errors.name.message}
            </span>
          )}
        </div>
      )}

      <div className="w-full  flex flex-col gap-4">
        <Label htmlFor="username">{labelUsername}</Label>
        <Input
          placeholder="Digite seu username"
          id="username"
          {...register('username')}
        />

        {errors.username && (
          <span className="text-red-400 text-base">
            {errors.username.message}
          </span>
        )}
      </div>

      <div className=" w-full flex flex-col gap-4">
        <Label htmlFor="password">{labelPassword}</Label>
        <Input
          type="password"
          placeholder="*************"
          id="password"
          {...register('password')}
        />

        {errors.password && (
          <span className="text-red-400 text-base">
            {errors.password.message}
          </span>
        )}
      </div>

      <Button
        className="leading-relaxed text-lg font-bold bg-violet-500
   transition-colors duration-500 hover:bg-violet-700 "
        type="submit"
      >
        {buttonName}
      </Button>
    </form>
  )
}

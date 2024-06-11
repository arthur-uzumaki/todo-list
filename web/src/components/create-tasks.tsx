'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useCreateTask } from '@/hook/use-create-task'
import { ClipboardList } from 'lucide-react'

export function CreateTask() {
  const { errors, handleCreateTask, handleSubmit, register } = useCreateTask()
  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="mt-5 w-full flex  items-stretch max-w-sm gap-4 flex-col"
    >
      <div className="space-y-2">
        <Label htmlFor="title">Titulo</Label>
        <Input
          type="text"
          placeholder="Digite o titulo"
          id="title"
          className="text-base text-zinc-300 placeholder:text-zinc-600"
          {...register('title')}
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="priority">Prioridade</Label>
        <Input
          type="text"
          placeholder="Digite a prioridade"
          id="priority"
          className="text-base text-zinc-300 placeholder:text-zinc-600"
          {...register('priority')}
        />
        {errors.priority && (
          <span className="text-red-500">{errors.priority.message}</span>
        )}
      </div>

      <div className="flex  lg:items-center lg:w-full lg:space-x-16 mt-1  ">
        <div className="space-y-2">
          <Label htmlFor="startAt">Começa ás</Label>
          <Input
            type="date"
            id="startAt"
            className="text-base text-zinc-300"
            {...register('startAt')}
          />
          {errors.startAt && (
            <span className="text-red-500">{errors.startAt.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="endAt">Termina em</Label>
          <Input
            type="date"
            id="endAt"
            className="text-base text-zinc-300"
            {...register('endAt')}
          />

          {errors.endAt && (
            <span className="text-red-500">{errors.endAt.message}</span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          spellCheck={false}
          className="bg-transparent  border border-transparent  text-base 
          text-zinc-300 font-extralight  placeholder:text-zinc-500"
          placeholder="Fica livre pra escrever"
          {...register('description')}
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </div>

      <Button
        className="mt-5 flex gap-2 font-bold text-lg 
        bg-violet-600 transition-colors duration-700 hover:bg-violet-800"
        type="submit"
      >
        <ClipboardList className="w-5 h-5 text-zinc-300" />
        Cadastrar
      </Button>
    </form>
  )
}

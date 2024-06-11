import { BackgroundDiv } from '@/components/backgroundDiv'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ClipboardList } from 'lucide-react'

export default function Cadastrar() {
  return (
    <main className="max-h-[860px] w-full  grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="mt-10  w-full relative">
        <BackgroundDiv />
      </div>

      <div className="bg-zinc-900 p-10 rounded-md  duration-500 hover:scale-105">
        <h1 className="font-bold text-2xl text-white leading-relaxed">
          Cadastrar tarefa
        </h1>
        <form className="mt-5 w-full flex  items-stretch max-w-sm gap-4 flex-col">
          <div className="space-y-2">
            <Label htmlFor="title">Titulo</Label>
            <Input
              type="text"
              placeholder="Digite o titulo"
              id="title"
              className="text-base text-zinc-300 placeholder:text-zinc-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Prioridade</Label>
            <Input
              type="text"
              placeholder="Digite a prioridade"
              id="priority"
              className="text-base text-zinc-300 placeholder:text-zinc-600"
            />
          </div>

          <div className="flex  lg:items-center lg:w-full lg:space-x-16 mt-1  ">
            <div className="space-y-2">
              <Label htmlFor="startAt">Começa ás</Label>
              <Input
                type="date"
                id="startAt"
                className="text-base text-zinc-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endAt">Termina em</Label>
              <Input
                type="date"
                id="endAt"
                className="text-base text-zinc-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              spellCheck={false}
              className="bg-transparent  border border-transparent  text-base text-zinc-300 font-extralight  placeholder:text-zinc-500"
              placeholder="Fica livre pra escrever "
            />
          </div>

          <Button
            className="mt-5 flex gap-2 font-bold text-lg bg-violet-600 transition-colors duration-700 hover:bg-violet-800"
            type="button"
          >
            <ClipboardList className="w-5 h-5 text-zinc-300" />
            Cadastrar
          </Button>
        </form>
      </div>
    </main>
  )
}

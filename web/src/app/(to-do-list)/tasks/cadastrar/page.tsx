import { BackgroundDiv } from '@/components/backgroundDiv'
import { CreateTask } from '@/components/create-tasks'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Criando nova tarefa',
}

export default function Cadastrar() {
  return (
    <main className="max-h-[860px] w-full  grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="mt-10  w-full  relative">
        <Link href="/">
          <ArrowLeft
            className="w-6 h-6 absolute left-4 text-zinc-400  
          duration-700 transition-colors hover:text-zinc-200  "
          />
        </Link>
        <BackgroundDiv />
      </div>

      <div className="bg-zinc-900 p-10 rounded-md  duration-500 hover:scale-105">
        <h1 className="font-bold text-2xl text-white leading-relaxed">
          Cadastrar tarefa
        </h1>
        <CreateTask />
      </div>
    </main>
  )
}

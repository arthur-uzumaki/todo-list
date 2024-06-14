import { api } from '@/lib/api'
import { Task } from '@/types/task'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
interface TaskProps {
  params: {
    id: string
  }
}

async function getTask(id: string) {
  const accessToken = cookies().get('accessToken')?.value
  const validadeOneHors = 60 * 60
  const response = await api(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      revalidate: validadeOneHors,
    },
  })

  const task = await response.json()

  return task
}

export async function generateMetadata({ params }: TaskProps) {
  const task: Task = await getTask(params.id)

  return {
    title: task.title,
  }
}

export default async function TaskPage({ params }: TaskProps) {
  const task: Task = await getTask(params.id)
  return (
    <main className="max-h-[860px] flex flex-col gap-2 items-center mt-10">
      <div className="flex flex-col gap-2 items-center relative bg-zinc-900 mt-3 p-4">
        <div className="absolute left-3 ">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 text-zinc-400" />
          </Link>
        </div>
        <h1 className="font-bold text-xl ">{task.title}</h1>
        <p className="flex gap-2 font-semibold text-lg">
          Prioridade:
          <span> {task.priority}</span>
        </p>
        <div className="flex gap-2">
          <p className="font-semibold text-lg">
            Inicio: <span>{dayjs(task.startAt).format('DD/MM/YYYY')}</span>
          </p>
          <p className="font-semibold text-lg">
            Termina em: <span>{dayjs(task.endAt).format('DD/MM/YYYY')}</span>
          </p>
        </div>
        <p className="w-[400px] text-base font-medium text-white leading-relaxed">
          {task.description}
        </p>
      </div>
    </main>
  )
}

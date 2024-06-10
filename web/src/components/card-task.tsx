import { api } from '@/lib/api'
import { Task } from '@/types/task'
import { cookies } from 'next/headers'
import Link from 'next/link'
async function fetchTasks() {
  const accessToken = cookies().get('accessToken')?.value
  const response = await api('/tasks', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const data = await response.json()
  return data.tasks
}

export async function CardTasks() {
  const tasks: Task[] = await fetchTasks()

  return (
    <ul className="grid grid-cols-3 gap-6">
      {tasks.map((item) => {
        return (
          <li key={item.id}>
            <Link
              href={`task/${item.id}`}
              className="rounded-md text-left  flex flex-col gap-3 m-2 
                  bg-zinc-800 p-5 overflow-hidden transition-all duration-500 hover:scale-105 outline-none hover:ring-zinc-700 focus-visible:ring-2 focus-visible:ring-zinc-100 "
            >
              <div className=" flex flex-1 justify-between gap-2  ">
                <h1 className="font-bold text-lg leading-tight ">
                  Title:{' '}
                  <span className="text-base text-zinc-400 font-medium px-1 leading-tight">
                    {item.title}
                  </span>
                </h1>
                <h1 className="font-bol text-lg leading-tight">
                  {' '}
                  Prioridade:
                  <span className="text-zinc-400 font-medium text-base leading-tight px-1">
                    {item.priority}
                  </span>
                </h1>
              </div>

              <div className="max-w-[380px] flex items-center overflow-hidden">
                <p className="truncate ">
                  {' '}
                  <span className="px-1">Descrição:</span>
                  {item.description}
                </p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

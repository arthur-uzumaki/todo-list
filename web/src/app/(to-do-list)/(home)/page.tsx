import { CardTasks } from '@/components/card-task'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Home',
}
export default async function Home() {
  const accessToken = cookies().get('accessToken')?.value
  if (!accessToken) {
    redirect('/sign-in')
  }

  return (
    <main className=" max-h-[860px] max-w-6xl space-y-6 my-12 px-5">
      <CardTasks />
    </main>
  )
}

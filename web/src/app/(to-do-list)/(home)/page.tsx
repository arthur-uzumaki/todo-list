import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const accessToken = cookies().get('accessToken')

  if (!accessToken) {
    redirect('/sign-in')
  }
  return <div>hello word!</div>
}

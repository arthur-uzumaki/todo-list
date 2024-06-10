import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface User {
  sub: string
  username: string
}

export function getUser(): User {
  const accessToken = cookies().get('accessToken')?.value

  if (!accessToken) {
    redirect('/sign-in')
  }

  const user: User = jwtDecode(accessToken)

  return user
}

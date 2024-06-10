import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  const redirectURL = new URL('/sign-in', request.url)
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `accessToken=; Path=/; max-age-0`,
    },
  })
}

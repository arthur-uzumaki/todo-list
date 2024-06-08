import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: {
    template: '%s | devtodo',
    default: 'devtodo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={roboto.variable}>
      <body className="bg-zinc-950 antialiased text-zinc-50">{children}</body>
    </html>
  )
}

import { Header } from '@/components/header'
import { ReactNode } from 'react'

interface TodoListLayoutProps {
  children: ReactNode
}

export default function TodoListLayout({ children }: TodoListLayoutProps) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-5">
      <Header />
      {children}
    </div>
  )
}

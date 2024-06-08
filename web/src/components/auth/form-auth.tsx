import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { HTMLProps } from 'react'

interface FormAuthProps extends HTMLProps<HTMLFormElement> {
  labelName?: string
  labelUsername: string
  labelPassword: string
  buttonName: string
}
export function FormAuth({
  labelName,
  labelUsername,
  labelPassword,
  buttonName,
  ...rest
}: FormAuthProps) {
  return (
    <form
      className="max-w-sm gap-4 mt-10 flex items-stretch flex-col w-full"
      {...rest}
    >
      {labelName && (
        <div className="w-full  flex flex-col gap-4">
          <Label>{labelName}</Label>
          <Input placeholder="Digite seu nome" />
        </div>
      )}

      <div className="w-full  flex flex-col gap-4">
        <Label>{labelUsername}</Label>
        <Input placeholder="Digite seu username" />
      </div>

      <div className=" w-full flex flex-col gap-4">
        <Label>{labelPassword}</Label>
        <Input type="password" placeholder="*************" />
      </div>

      <Button
        className="leading-relaxed text-lg font-bold bg-violet-500
   transition-colors duration-1000 hover:bg-violet-700 "
      >
        {buttonName}
      </Button>
    </form>
  )
}

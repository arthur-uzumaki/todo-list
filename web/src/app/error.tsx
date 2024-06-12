'use client'
import { useEffect } from 'react'

export default function Erro500({
  erro,
  resetar,
}: {
  erro: Error & { digest?: string }
  resetar: () => void
}) {
  useEffect(() => {
    // Registrar o erro em um serviço de relatório de erros
    console.error(erro)
  }, [erro])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Algo deu errado!</h2>
      <p className="text-lg text-z  inc-700 mb-8">
        Não foi possível processar a sua solicitação neste momento. Por favor,
        tente novamente mais tarde.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2
         px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => resetar()}
      >
        Tentar novamente
      </button>
    </div>
  )
}

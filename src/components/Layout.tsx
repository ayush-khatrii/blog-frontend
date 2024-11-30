import { Toaster } from './ui/toaster'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='absolute top-5'>
        <Toaster />
      </div>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}
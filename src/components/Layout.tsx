import Navbar from './Navbar'
import { Toaster } from './ui/toaster'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className='absolute top-5'>
        <Toaster />
      </div>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}
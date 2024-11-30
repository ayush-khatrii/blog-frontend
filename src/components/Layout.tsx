import { Toaster } from './ui/toaster'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='absolute top-5'>
        <Toaster />
      </div>
      {/* <header className="shadow-sm px-5 py-4 dark:shadow-neutral-900 shadow-zinc-200">
        <div className="container mx-auto  flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">DevLogs</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/signin"><Button size="sm" variant="ghost">Sign In</Button></Link></li>
              <li><Link to="/signup"><Button size="sm">Sign Up</Button></Link></li>
              <ThemeSwitchButton />
            </ul>
          </nav>
        </div>
      </header> */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from 'next-themes'
createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider
      defaultTheme='dark'
      attribute="class"
    >
      <App />
    </ThemeProvider>
  </>
)

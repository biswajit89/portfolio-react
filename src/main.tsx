import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.PROD ? '/portfolio-react' : '/'}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

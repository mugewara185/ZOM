import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UIProvider } from './app/providers/UIProvider.tsx'
import { ThemeProvider } from './app/providers/ThemeProvider.tsx'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './app/providers/AppProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UIProvider>
          {/* <AppProvider> */}
            <App />
          {/* </AppProvider> */}
        </UIProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

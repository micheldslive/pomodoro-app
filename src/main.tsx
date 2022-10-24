import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StatesProvider } from './core/context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StatesProvider>
      <App />
    </StatesProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ListBankAPIContextProvider } from './contexts/apiBankContext'
import './global.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ListBankAPIContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ListBankAPIContextProvider>
  </React.StrictMode>
)

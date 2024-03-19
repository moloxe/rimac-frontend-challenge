import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from '@/routes/login'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
)

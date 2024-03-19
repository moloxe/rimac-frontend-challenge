import React from 'react'
import ReactDOM from 'react-dom/client'
import RootPage from './routes/root.tsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>
)

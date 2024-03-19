import React from 'react'
import ReactDOM from 'react-dom/client'
import StoreProvider from './store/store-provider'
import Router from './router'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </React.StrictMode>
)

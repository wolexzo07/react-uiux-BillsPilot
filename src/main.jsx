import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/bootstrap.min.css'
import './assets/icon/font/bootstrap-icons.min.css'
import './assets/css/index.css'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/jquery-3.7.1.min.js'
import './assets/js/index.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

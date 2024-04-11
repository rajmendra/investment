import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider} from './context/index.jsx'
import { ActiveTopicsProvider } from './context/topics.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <ActiveTopicsProvider>
    <App />
    </ActiveTopicsProvider>
  </DarkModeProvider>,
)

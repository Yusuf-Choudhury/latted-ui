import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './styles.css'
import App from './App'

if (location.pathname !== '/for-latted' && location.pathname !== '/for-latted/') {
  history.replaceState(null, '', '/for-latted' + location.hash)
}
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)

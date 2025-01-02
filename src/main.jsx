import { createRoot } from 'react-dom/client'
import GifExpertApp from './GifExpertApp'
import './styles.css'
import { StrictMode } from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)

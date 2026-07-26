import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WatchLaterProvider} from './context/WatchLaterContext'
import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchLaterProvider>
      <App />
    </WatchLaterProvider>
  </StrictMode>,
)

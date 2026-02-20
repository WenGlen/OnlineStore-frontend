import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom'
//import App from './App.jsx'
import './styles/index.scss'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'

//const basename = import.meta.env.PROD ? '/Onlinestore-frontend' : ''

const router = createHashRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

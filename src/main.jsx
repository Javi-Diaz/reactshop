import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ProductContextProvider> 
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { UsuarioProvider } from './context/UsuarioContext.jsx'
import Products from "./pages/Products.jsx"
import { FiltroProvider } from './context/FiltroContext.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/products",
    element: <Products/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <UsuarioProvider>
      <CarritoProvider>
        <ProductContextProvider>
          <FiltroProvider>
            <ModalProvider>
              <RouterProvider router={router} />
            </ModalProvider>
          </FiltroProvider>
          
        </ProductContextProvider> 
      </CarritoProvider>
    </UsuarioProvider>
    
    
  </StrictMode>,
)

  import { createContext, useState, useContext } from "react";
  import { ProductsContext } from "./ProductContext";

  export const FiltroContext = createContext();

  export function FiltroProvider({ children }) {
    const products = useContext(ProductsContext);

    // Estado de categoría seleccionada
    const [categoria, setCategoria] = useState("todos");

    // Función para filtrar productos por Categoria
    const productosFiltrados = products.filter(product => {
      if (categoria === "todos") return true;
      return product.type === categoria; 
    });

    // Estado de orden
    const [ ordenarPor, setOrdenarPor ] = useState("")

    // Funcion para filtrar productos por select de Ordenar por:
    const productosOrdenados = [...productosFiltrados].sort((a,b)=>{
      if(ordenarPor === "precMenMay") {
        return a.price - b.price
      };
      if(ordenarPor === "precMayMen") {
        return b.price - a.price
      };
      if(ordenarPor === "alfAZ") {
        return a.name.localeCompare(b.name)
      };
      if(ordenarPor === "alfZA") {
        return b.name.localeCompare(a.name)
      };
      return 0;
    })

    // Funcion para filtrar por precio
    const [ desde, setDesde ] = useState(0)
    const [ hasta, setHasta ] = useState(100000)

    const productosDesdeHasta = productosOrdenados.filter((product)=>{
      return product.price >= desde && product.price <= hasta
    })

    return (
      <FiltroContext.Provider value={{ categoria, setCategoria, productosFiltrados, ordenarPor, setOrdenarPor, productosOrdenados, setDesde, setHasta, productosDesdeHasta, desde, hasta}}>
        {children}
      </FiltroContext.Provider>
    );
  }

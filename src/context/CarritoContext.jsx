import { createContext, useState } from "react";  

export const CarritoContext = createContext();

export function CarritoProvider({children}){
    const [carrito, setCarrito] = useState([])

    // Añadir al carrito y sumar cantidad
    const añadirCarrito = (producto)=>{
        const productoRepetido = carrito.find((el)=> el.id === producto.id)

        if(productoRepetido){
            setCarrito(carrito.map((item) => (item.id === producto.id ? {...producto, quanty: productoRepetido.quanty + 1} : item)))
        }
        else{
            setCarrito(prevCarrito => {
            const nuevoCarrito = [...prevCarrito, producto];
            
            return nuevoCarrito;
            });
        }
    }

    // Quitar cantidad
    const quitarCantidad = (producto) => {
        const productoRepetido = carrito.find((el)=> el.id === producto.id)

        productoRepetido.quanty !== 1 &&
        setCarrito(carrito.map((item) => (item.id === producto.id ? {...producto, quanty: productoRepetido.quanty - 1} : item)))
    }

    return(
        <CarritoContext.Provider value={{carrito, setCarrito, añadirCarrito, quitarCantidad}}>
            {children}
        </CarritoContext.Provider>
    )
}


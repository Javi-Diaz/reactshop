import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { FaTrashAlt } from "react-icons/fa";
import "./ProductosCarrito.css"

function ProductosCarrito(){
    const {carrito, setCarrito} = useContext(CarritoContext)

    const eliminarProducto = (id)=>{
        const encontrarProducto = carrito.find((prod)=> prod.id === id)

        const nuevoCarrito = carrito.filter((productos)=>{
            return productos !== encontrarProducto
        })

        setCarrito(nuevoCarrito)
    }

    return (
        <>
            {carrito.length > 0 ? (
                carrito.map((producto)=>{
                    return(
                            <div key={producto.id} className="cardCarrito">
                                <div className="cardCarrito-boxImg">
                                    <img src={producto.img} alt="imagen-carrito" />
                                </div>
                                <div className="cardCarrito-nombre">
                                    <h3>{producto.name}</h3>
                                </div>
                                <div className="cardCarrito-precio">
                                    <h4>Cada prenda: ${producto.price}</h4>
                                </div>
                                <div className="cardCarrito-cantidad">
                                    <h4>-</h4><h4 className="cardCarrito-cantidad-valor">{producto.quanty}</h4><h4>+</h4>
                                </div>
                                <div className="cardCarrito-total">
                                    <h4>Total: ${producto.price * producto.quanty}</h4>
                                </div>
                                <div className="cardCarrito-btnEliminar" onClick={()=>{eliminarProducto(producto.id)}}>
                                    <FaTrashAlt/>
                                </div>
                            </div>
                        )
                
                    }
                )):
                <h2 className="carritoVacio">Tu carrito esta vacio.</h2>
            }
        </>
         
    )
}

export default ProductosCarrito
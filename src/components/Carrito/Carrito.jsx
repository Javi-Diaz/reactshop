import Header from "../Header/Header";
import ProductosCarrito from "./ProductosCarrito";
import "./Carrito.css"
import { FaWhatsapp } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";


function Carrito({mostrarCarrito, toggleCarrito}){
    const {carrito} = useContext(CarritoContext)
    const [carritoActivo, setCarritoActivo] = useState(false);
    // Detectar cuando hay al menos 1 producto
        useEffect(() => {
            if (carrito.length > 0) {
                setCarritoActivo(true);
            } else {
                setCarritoActivo(false);
            }
        }, [carrito]);


    return(
        <>
            <div className={`modalCarrito ${mostrarCarrito ? "modalCarrito-abierto" : ""}`}>
                <div className="modalCarrito-header"  >
                    <h2>Carrito</h2> <span onClick={()=>toggleCarrito()}>X</span>
                </div>
                <ProductosCarrito/>
                { carritoActivo > 0 ? 
                    <div className="modalCarrito-footer">
                        <div className="modalCarrito-footer-total">
                            <h3>Total:</h3> <span>X</span>
                        </div>
                        
                        <button className="modalCarrito-footer-btn"><FaWhatsapp/> Enviar pedido por WhatsApp</button>
                    </div> : ""
                }
                
            </div>
        </>
    )
}

export default Carrito;
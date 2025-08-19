import ProductosCarrito from "./ProductosCarrito";
import "./Carrito.css"
import { FaWhatsapp } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { UsuarioContext } from "../../context/UsuarioContext";
import ModalRegistroCarrito from "../ModalRegistroEnviarCarrito/ModalRegistroEnviarCarrito";


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

    // Verifica si el usuario esta logueado
    const {usuarioLogueado} = useContext(UsuarioContext)
    // Condicional para mostrar el modal de que debe registrarse
    const [mostrarModalEnviarCarrito, setMostrarModalEnviarCarrito] = useState(false)

    const handleClick = ()=>{
        if(!usuarioLogueado){
            setMostrarModalEnviarCarrito(true)
        }else{
            // 1. Armamos el mensaje del pedido
            let mensaje = "Hola ReactShop, saludos. Quiero este pedido:\n\n";

            carrito.forEach((item) => {
                const subtotal = item.price * item.quanty;
                mensaje += `Producto: ${item.name}\nCantidad: ${item.quanty}\nPrecio: $${subtotal}\n\n`;
            });

            mensaje += `Total: $${total}`;

            // 2. Obtenemos el número del usuario (ejemplo)
            const numero = usuarioLogueado.numero; // Ajustá al nombre real del campo
            const numeroSinSimbolos = numero.replace(/[^0-9]/g, ""); // limpiar +, espacios, etc


            // 3. Armamos el link de WhatsApp
            const url = `https://wa.me/${numeroSinSimbolos}?text=${encodeURIComponent(mensaje)}`;

            // 4. Abrimos WhatsApp en otra pestaña
            window.open(url, "_blank");
        }
    }
    
    // Total que hay en el carrito
    const total = carrito.reduce((acc,el)=> acc + el.price * el.quanty, 0)

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
                            <h3>Total:</h3> <h3>${total}</h3>
                        </div>
                        
                        <button className="modalCarrito-footer-btn" onClick={handleClick}><FaWhatsapp/> Enviar pedido por WhatsApp</button>
                        
                    </div> : ""
                }
                {mostrarModalEnviarCarrito && (<ModalRegistroCarrito cerrar={()=>setMostrarModalEnviarCarrito(false)}/>)}
            </div>
        </>
    )
}

export default Carrito;
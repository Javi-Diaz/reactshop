import "./ModalRegistroCarrito.css"
import { useState, useEffect } from "react";

function ModalRegistroCarrito({cerrar}){
    const [animandoSalida, setAnimandoSalida] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setAnimandoSalida(true); // Activa la animación de salida
          setTimeout(() => {
            cerrar(); // Cierra después de la animación
          }, 300); // mismo tiempo que fadeOut
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [cerrar]);

    return (
    <div className={`modal-bienvenida-backdrop ${animandoSalida ? "fade-out" : "fade-in"}`}>
      <div className="modal-bienvenida-content">
        
        <h2>Debes iniciar sesion para enviarte el presupuesto.</h2>
      </div>
    </div>
  );
}

export default ModalRegistroCarrito;

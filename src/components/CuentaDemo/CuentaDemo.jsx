import { FaUserCircle } from "react-icons/fa";
import "./CuentaDemo.css"
import { useState } from "react";

function CuentaDemo() {
    const [cuentaDemo, setCuentaDemo] = useState(false)
     const toggleTooltip = () => {
        setCuentaDemo(prev => !prev);
    };

    return(
        <div 
        className="tooltip-container"
        onMouseEnter={() => setCuentaDemo(true)}
        onMouseLeave={() => setCuentaDemo(false)}
        onTouchStart={toggleTooltip}
        tabIndex="0" // para que sea accesible con teclado
        >   
        <FaUserCircle/>
            {cuentaDemo && (
                <div className="tooltip">
                <strong>Cuenta demo:</strong><br />
                <strong>Usuario:</strong> Jose Alvarez<br />
                <strong>Contraseña:</strong> jose123<br />
                Para que se habilite el envio <br /> del pedido por WhatsApp tenes<br /> que registrarte realmente.
                </div>
            )}
        </div>
    )
}

export default CuentaDemo;
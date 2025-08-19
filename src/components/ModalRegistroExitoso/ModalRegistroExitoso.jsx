import { useEffect, useState } from "react";
import "./ModalRegistroExitoso.css";

function ModalRegistroExitoso({ cerrar }) {
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
        
        <h2>Registro exitoso. Ahora puedes iniciar sesión.</h2>
      </div>
    </div>
  );
}

export default ModalRegistroExitoso;

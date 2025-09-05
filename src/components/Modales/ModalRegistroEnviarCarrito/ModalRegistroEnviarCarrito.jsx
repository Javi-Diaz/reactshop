import "./ModalRegistroCarrito.css";
import { useAutoCloseModal } from "../../../hooks/useAutoCloseModal";

function ModalRegistroCarrito({ cerrar }) {
  const animandoSalida = useAutoCloseModal(cerrar);

  return (
    <div className={`modal-bienvenida-backdrop ${animandoSalida ? "fade-out" : "fade-in"}`}>
      <div className="modal-bienvenida-content">
        <h2>Debes iniciar sesión para enviarte el presupuesto.</h2>
      </div>
    </div>
  );
}

export default ModalRegistroCarrito;

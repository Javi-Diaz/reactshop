import "./BienvenidoModal.css";
import { useAutoCloseModal } from "../../../hooks/useAutoCloseModal";

function BienvenidoModal({ nombre, cerrar }) {
  const animandoSalida = useAutoCloseModal(cerrar);

  return (
    <div className={`modal-bienvenida-backdrop ${animandoSalida ? "fade-out" : "fade-in"}`}>
      <div className="modal-bienvenida-content">
        
        <h2>{nombre ? `¡Bienvenido/a!, ${nombre} 👋` : "¡Bienvenido/a!"}</h2>
      </div>
    </div>
  );
}

export default BienvenidoModal;

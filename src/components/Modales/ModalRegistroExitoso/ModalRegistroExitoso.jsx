import "./ModalRegistroExitoso.css";
import { useAutoCloseModal } from "../../../hooks/useAutoCloseModal";

function ModalRegistroExitoso({ cerrar }) {
  const animandoSalida = useAutoCloseModal(cerrar);

  return (
    <div className={`modal-bienvenida-backdrop ${animandoSalida ? "fade-out" : "fade-in"}`}>
      <div className="modal-bienvenida-content">
        <h2>Registro exitoso. Ahora puedes iniciar sesión.</h2>
      </div>
    </div>
  );
}

export default ModalRegistroExitoso;

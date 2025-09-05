import { useEffect, useState } from "react";

export function useAutoCloseModal(cerrar, delay = 2000, fadeOut = 300) {
  const [animandoSalida, setAnimandoSalida] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimandoSalida(true); // Activa animación de salida
      setTimeout(() => {
        cerrar(); // Cierra después de la animación
      }, fadeOut);
    }, delay);

    return () => clearTimeout(timer);
  }, [cerrar, delay, fadeOut]);

  return animandoSalida;
}

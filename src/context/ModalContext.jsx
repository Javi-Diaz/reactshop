// src/context/ModalContext.jsx
import { createContext, useState, useCallback } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleModal = useCallback(() => {
    setMostrarModal(prev => !prev);
  }, []);

  return (
    <ModalContext.Provider value={{ mostrarModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

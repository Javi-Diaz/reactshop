import { FaAlignJustify, FaSearch,FaUser,FaShoppingCart,FaSignOutAlt } from "react-icons/fa";
import "./Header.css"
import Menu from "./Menu/Menu";
import { useState, useCallback, useContext, useEffect } from "react";
import CarruselHeader from "./CarruselHeader/CarruselHeader";
import Lupa from "./Lupa/Lupa";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import Carrito from "../Carrito/Carrito";
import { CarritoContext } from "../../context/CarritoContext";
import Usuario from "../Usuario/Usuario";
import { UsuarioContext } from "../../context/UsuarioContext";
import BienvenidoModal from "../Modales/BienvenidoModal/BienvenidoModal";
import ModalRegistroExitoso from "../Modales/ModalRegistroExitoso/ModalRegistroExitoso";

function Header(){
    //Abrir menu
    const [mostrarMenu,setMostrarMenu] = useState(false)
    const toggleMenu = useCallback(() => {
        setMostrarMenu(prev => !prev);
      }, []);

    //Abrir lupa
    const [mostrarLupa,setMostrarLupa] = useState(false)
    const toggleLupa = useCallback(() => {
        setMostrarLupa(prev => !prev);
      }, []);

    // Mostrar modal EnProduccion
    const { toggleModal } = useContext(ModalContext);

    // Abrir carrito
    const [mostrarCarrito,setMostrarCarrito] = useState(false)
    const toggleCarrito = useCallback(() => {
        setMostrarCarrito(prev => !prev);
    }, []);

    // Activar carrito
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

    //Abrir modalUsuario(formulario)
    const toggleUsuario = useCallback(() => {
        setMostrarUsuario(prev => !prev);
    }, []);

    const {usuarioLogueado, cerrarSesion, setMostrarUsuario,  registroExitoso, limpiarRegistroExitoso, mostrarModalBienvenida,limpiarMostrarBienvenida} =  useContext(UsuarioContext)
    
    // Mostrar modalBienvenido
    const [mostrarBienvenida, setMostrarBienvenida] = useState(false);
    useEffect(() => {
        if (usuarioLogueado) {
            setMostrarBienvenida(true); // Mostrar modal al loguearse
        }
    }, [usuarioLogueado]);

    // Mostrar modalRegistroExitoso
    const [mostrarModalRegistroExitoso, setMostrarModalRegistroExitoso] = useState(false)
    useEffect(()=>{
        if(registroExitoso){
            setMostrarModalRegistroExitoso(true)
        }
    }, [registroExitoso])

    return(
        <header className="header">
            <CarruselHeader/>
            <div className="header-navegation">
                <FaAlignJustify className="header-navegation-icon menu-icon" onClick={()=>{toggleMenu()}}/>
                <Menu mostrarMenu={mostrarMenu} toggleMenu={toggleMenu} />
                <FaSearch className="header-navegation-icon search-icon" onClick={()=>{toggleLupa()}}/>
                <Lupa mostrarLupa={mostrarLupa} toggleLupa={toggleLupa}/>
                <Link className="header-logo" to={"/"}><h1>ReactShop</h1></Link>
                {mostrarModalBienvenida && (
                    <BienvenidoModal
                        nombre={usuarioLogueado?.usuario}
                        cerrar={() =>{
                                setMostrarBienvenida(false)
                                limpiarMostrarBienvenida()
                            }}
                    />
                )}
                {usuarioLogueado ?
                 <FaSignOutAlt onClick={cerrarSesion} className="header-navegation-icon user-icon"/> 
                 : 
                 <FaUser onClick={toggleUsuario} className="header-navegation-icon user-icon" />}
                {mostrarModalRegistroExitoso &&(
                    <ModalRegistroExitoso
                        cerrar={() => {
                            
                            setMostrarModalRegistroExitoso(false);
                            limpiarRegistroExitoso()
                        }}
                    />)
                }
                <Usuario toggleUsuario={toggleUsuario}/>
                <Link onClick={()=>{toggleCarrito()}}><FaShoppingCart className="header-navegation-icon cart-icon" /><div className={`${ carritoActivo ? "carrito-active" : "carrito-empty"}`}></div></Link>
                <Carrito mostrarCarrito={mostrarCarrito} toggleCarrito={toggleCarrito}/>
            </div>
            
        </header>
    )
}

export default Header;
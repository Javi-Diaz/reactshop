import { FaAlignJustify, FaSearch,FaUser,FaShoppingCart } from "react-icons/fa";
import "./Header.css"
import Menu from "./Menu/Menu";
import { useState, useCallback, useContext, useEffect } from "react";
import CarruselHeader from "./CarruselHeader/CarruselHeader";
import Lupa from "./Lupa/Lupa";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import Carrito from "../Carrito/Carrito";
import { CarritoContext } from "../../context/CarritoContext";

function Header({scrollToSection, inicioRef,loMasNuevoRef,destacadoRef,promocionesRef}){
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

    //Mostrar modal EnProduccion
    const { toggleModal } = useContext(ModalContext);

    //Abrir carrito
    const [mostrarCarrito,setMostrarCarrito] = useState(false)
    const toggleCarrito = useCallback(() => {
        setMostrarCarrito(prev => !prev);
    }, []);

    //Activar carrito
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

    return(
        <header className="header">
            <CarruselHeader/>
            <div className="header-navegation">
                <FaAlignJustify className="header-navegation-icon menu-icon" onClick={()=>{toggleMenu()}}/>
                <Menu mostrarMenu={mostrarMenu} toggleMenu={toggleMenu} scrollToSection={scrollToSection} inicioRef={inicioRef} loMasNuevoRef={loMasNuevoRef} destacadoRef={destacadoRef} promocionesRef={promocionesRef}/>
                <FaSearch className="header-navegation-icon search-icon" onClick={()=>{toggleLupa()}}/>
                <Lupa mostrarLupa={mostrarLupa} toggleLupa={toggleLupa}/>
                <Link className="header-logo" to={"/"}><h1>ReactShop</h1></Link>
                <FaUser onClick={toggleModal} className="header-navegation-icon user-icon" />
                <Link onClick={()=>{toggleCarrito()}}><FaShoppingCart className="header-navegation-icon cart-icon" /><div className={`${ carritoActivo ? "carrito-active" : "carrito-empty"}`}></div></Link>
                <Carrito mostrarCarrito={mostrarCarrito} toggleCarrito={toggleCarrito}/>
            </div>
            
        </header>
    )
}

export default Header;
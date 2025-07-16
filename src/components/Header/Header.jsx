import { FaAlignJustify, FaSearch,FaUser,FaShoppingCart } from "react-icons/fa";
import "./Header.css"
import Menu from "./Menu/Menu";
import { useState, useCallback, useContext } from "react";
import CarruselHeader from "./CarruselHeader/CarruselHeader";
import Lupa from "./Lupa/Lupa";
import { Link } from "react-router-dom";
import ModalEnProduccion from "../ModalEnProduccion/ModalEnProduccion";
import { ModalContext } from "../../context/ModalContext";

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

    //Mostrar modal EnProduccion
    const { toggleModal } = useContext(ModalContext);

    return(
        <header className="header">
            <CarruselHeader/>
            <div className="header-navegation">
                <FaAlignJustify className="header-navegation-icon menu-icon" onClick={()=>{toggleMenu()}}/>
                <Menu mostrarMenu={mostrarMenu} toggleMenu={toggleMenu} />
                <FaSearch className="header-navegation-icon search-icon" onClick={()=>{toggleLupa()}}/>
                <Lupa mostrarLupa={mostrarLupa} toggleLupa={toggleLupa}/>
                <Link className="header-logo" to={"/"}><h1>ReactShop</h1></Link>
                <FaUser onClick={toggleModal} className="header-navegation-icon user-icon" />
                <FaShoppingCart onClick={toggleModal} className="header-navegation-icon cart-icon" />
            </div>
            
        </header>
    )
}

export default Header;
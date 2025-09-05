import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useState, useContext } from "react";
import LogoRedes from "../../LogoRedes/LogoRedes";
import { ModalContext } from "../../../context/ModalContext";
import { HashLink } from "react-router-hash-link"
import { FiltroContext } from "../../../context/FiltroContext";


function Menu({toggleMenu, mostrarMenu}){
    const [changeIcon, setChangeIcon] = useState(false)
    const toggleIcon= ()=>{
        setChangeIcon(!changeIcon)
    }

    //Mostar modal en produccion
    const { toggleModal } = useContext(ModalContext);   

    const { setCategoria } = useContext(FiltroContext)

    return(
            <div className={`menu ${mostrarMenu ? "menu-abierto" : ""}`}>
                <div className="menu-sombra" onClick={()=>{toggleMenu()}}></div>
                <LogoRedes className={"menu-redes"}/>
                <div className="menu-textBtn">
                    <h3>MENU</h3>
                    <button className="menu-btnClose" onClick={()=>{toggleMenu()}}>X</button>
                </div>
                <nav className="menu-nav">
                    <ul>
                        <li><HashLink smooth to="/#inicio" onClick={()=>{
                            toggleMenu()
                            }}>Inicio</HashLink></li>
                        <li><HashLink smooth to="/#loMasNuevo" onClick={()=>{
                            toggleMenu()
                            }}>Lo mas nuevo</HashLink></li>
                        <li><HashLink smooth to="/#destacado" onClick={()=>{
                            toggleMenu()
                        }}>Destacado</HashLink></li>
                        <li id="li-menu-nav-desplegable">
                            <div className="menu-nav-desplegable">
                                <div className="menu-nav-header" onClick={()=>{toggleIcon()}}>Productos <span>{changeIcon ? "-" : "+"}</span></div>
                                <div className={`menu-nav-content ${changeIcon ? "menu-nav-content-abierto" : ""}`}>
                                    <ul>
                                        <li><NavLink to={"/Products"} onClick={()=>{
                                            setCategoria("todos")
                                            toggleMenu()
                                        }}>Todos los productos</NavLink></li>
                                        <li><NavLink
                                            to={"/Products"}
                                        onClick={()=>{
                                            setCategoria("Remera")
                                            toggleMenu()
                                        }}>Remeras</NavLink></li>
                                        <li><NavLink
                                            to={"/Products"}
                                        onClick={()=>{
                                            setCategoria("Buzo")
                                            toggleMenu()
                                        }}>Buzos</NavLink></li>
                                        <li><NavLink
                                            to={"/Products"}
                                        onClick={()=>{
                                            setCategoria("Campera")
                                            toggleMenu()
                                        }}>Camperas</NavLink></li>
                                        <li><NavLink
                                            to={"/Products"}
                                        onClick={()=>{
                                            setCategoria("Jean")
                                            toggleMenu()
                                        }}>Jeans</NavLink></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </li>
                        <li><HashLink smooth to="/#promociones" onClick={()=>{
                            toggleMenu()
                        }}>Promociones</HashLink></li>
                    </ul>
                    
                </nav>
        </div>       
        
    )
}

export default Menu;
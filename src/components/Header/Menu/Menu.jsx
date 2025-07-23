import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useState, useContext } from "react";
import LogoRedes from "../../LogoRedes/LogoRedes";
import { ModalContext } from "../../../context/ModalContext";


function Menu({toggleMenu, mostrarMenu, scrollToSection, inicioRef,loMasNuevoRef, destacadoRef, promocionesRef}){
    const [changeIcon, setChangeIcon] = useState(false)
    const toggleIcon= ()=>{
        setChangeIcon(!changeIcon)
    }

    //Mostar modal en produccion
    const { toggleModal } = useContext(ModalContext);   

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
                        <li><NavLink onClick={()=>{
                            scrollToSection(inicioRef)
                            toggleMenu()
                            }}>Inicio</NavLink></li>
                        <li><NavLink onClick={()=>{
                            scrollToSection(loMasNuevoRef)
                            toggleMenu()
                            }}>Lo mas nuevo</NavLink></li>
                        <li><NavLink onClick={()=>{
                            scrollToSection(destacadoRef)
                            toggleMenu()
                        }}>Destacado</NavLink></li>
                        <li>
                            <div className="menu-nav-desplegable">
                                <div className="menu-nav-header" onClick={()=>{toggleIcon()}}>Productos <span>{changeIcon ? "-" : "+"}</span></div>
                                <div className={`menu-nav-content ${changeIcon ? "menu-nav-content-abierto" : ""}`}>
                                    <ul>
                                        <li><NavLink onClick={toggleModal}>Remeras</NavLink></li>
                                        <li><NavLink onClick={toggleModal}>Buzos</NavLink></li>
                                        <li><NavLink onClick={toggleModal}>Camperas</NavLink></li>
                                        <li><NavLink onClick={toggleModal}>Jeans</NavLink></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </li>
                        <li><NavLink onClick={()=>{
                            scrollToSection(promocionesRef)
                            toggleMenu()
                        }}>Promociones</NavLink></li>
                    </ul>
                    
                </nav>
        </div>       
        
    )
}

export default Menu;
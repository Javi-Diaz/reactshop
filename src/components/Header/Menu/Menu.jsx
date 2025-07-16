import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useState } from "react";
import LogoRedes from "../../LogoRedes/LogoRedes";

function Menu({toggleMenu, mostrarMenu}){
    const [changeIcon, setChangeIcon] = useState(false)
    const toggleIcon= ()=>{
        setChangeIcon(!changeIcon)
    }

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
                        <li><NavLink>Inicio</NavLink></li>
                        <li><NavLink>Lo mas nuevo</NavLink></li>
                        <li><NavLink>Destacado</NavLink></li>
                        <li>
                            <div className="menu-nav-desplegable">
                                <div className="menu-nav-header" onClick={()=>{toggleIcon()}}>Productos <span>{changeIcon ? "-" : "+"}</span></div>
                                <div className={`menu-nav-content ${changeIcon ? "menu-nav-content-abierto" : ""}`}>
                                    <ul>
                                        <li><NavLink>Remeras</NavLink></li>
                                        <li><NavLink>Buzos</NavLink></li>
                                        <li><NavLink>Camperas</NavLink></li>
                                        <li><NavLink>Jeans</NavLink></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </li>
                        <li><NavLink>Promociones</NavLink></li>
                    </ul>
                    
                </nav>
        </div>       
        
    )
}

export default Menu;
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF,FaWhatsapp } from "react-icons/fa";
import "./LogoRedes.css"

function LogoRedes(){
    return(
        <>
            <div className="logo-redes">
                    <NavLink className="logo-redes-link"><FaInstagram className="logo-red-icon"/></NavLink>
                    <NavLink className="logo-redes-link"><FaFacebookF className="logo-red-icon"/></NavLink>
                    <NavLink className="logo-redes-link"><FaWhatsapp className="logo-red-icon"/></NavLink>               
            </div>
        </>
    )
}

export default LogoRedes;
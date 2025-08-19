import "./Usuario.css"
import Login from "./Login/Login";
import Registrarse from "./Registrarse/Registrarse";
import { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

function Usuario({toggleUsuario}){
    const [inicioSesion, setInicioSesion] = useState(true)

    const {mostrarUsuario} = useContext(UsuarioContext)

    return(
        <div className={`modalUsuario ${mostrarUsuario ? "modalUsuario-abierto" : ""}`}>
            <div onClick={()=>{toggleUsuario()}} className="modalUsuario-sombra"></div>

            <div className={`modalUsuario-boxForm ${inicioSesion ? "animar-login" : "animar-registro"}`}>
                    <h2>{inicioSesion ? "Iniciar sesión" : "Registrarse"}</h2>
                    <span className="modalUsuario-btnClose" onClick={()=>{toggleUsuario()}}>X</span>
                    {inicioSesion
                    ? <Login setInicioSesion={setInicioSesion} toggleUsuario={toggleUsuario} />
                    : <Registrarse setInicioSesion={setInicioSesion} toggleUsuario={toggleUsuario} inicioSesion={inicioSesion}/>
                }
            </div>

                        
        </div>
        
    )
}

export default Usuario;
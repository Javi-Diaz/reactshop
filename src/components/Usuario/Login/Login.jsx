import "./Login.css"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../../../context/UsuarioContext";
/* import { FaUserCircle } from "react-icons/fa"; */
import CuentaDemo from "../../CuentaDemo/CuentaDemo";

function Login({toggleUsuario, setInicioSesion}) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    
    const [errorUsuarioNoRegistrado, setUsuarioNoRegistrado] = useState(false)

    const {iniciarSesion, mostrarUsuario} = useContext(UsuarioContext)

    // Error formulario incompleto
    const [errorCampoIncompleto, setErrorCampoIncompleto] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        // Tira error que falta completar parte del formulario
        if (nombre === "" || contraseña === "") {
            setErrorCampoIncompleto(true)
            return
        }

        // Envia al contexto lo del formulario para ver si el usuario ya esta registrado
        const sesionValida = iniciarSesion({usuario:nombre.trim().toLocaleLowerCase(), contraseña:contraseña})
        
        // Si el usuario esta registrado cierra el formulario
        if(sesionValida){
            toggleUsuario()
        }else {
            // Tira error que el usuario no esta registrado
            setUsuarioNoRegistrado(true); 
        }   
    }

    // Limpia los capos del formulario cuando se cierra el modal
    useEffect(()=>{
        if(!mostrarUsuario){
            
            setNombre("")
            setContraseña("")
            setErrorCampoIncompleto(false)
            setUsuarioNoRegistrado(false)
        }
        
    }, [mostrarUsuario])

    return(
          <>
            <form action="" className="modalUsuario-form" onSubmit={handleSubmit}>
                    <label className="modalUsuario-label" htmlFor="nombreUsuario">Nombre de usuario <CuentaDemo /></label>
                    <input 
                        className="modalUsuario-input" 
                        type="text" 
                        placeholder="Nombre de usuario" 
                        id="nombreUsuario"
                        onChange={(e)=>{
                            setNombre(e.target.value)
                            // limpia errores anteriores al escribir
                            setErrorCampoIncompleto(false); 
                            setUsuarioNoRegistrado(false); 
                        }}
                        value={nombre}
                    />
                    <label className="modalUsuario-label" htmlFor="contraseña">Contraseña</label>
                    <input 
                        className="modalUsuario-input" 
                        type="password" 
                        placeholder="Contraseña" 
                        id="contraseña"
                        onChange={(e)=>{
                            setContraseña(e.target.value)
                            // limpia errores anteriores al escribir
                            setErrorCampoIncompleto(false); 
                            setUsuarioNoRegistrado(false); 
                        }}
                        value={contraseña}
                    />
                    <button className="modalUsuario-submit">Iniciar sesión</button>
                    {errorCampoIncompleto && <p className="modalUsuario-error">Todos los campos son obligatorios.</p>}
                    {errorUsuarioNoRegistrado && <p className="modalUsuario-error">El usuario ingresado no esta registrado.</p>}
                </form>
                <p className="modalUsuario-p">¿No tenés cuenta aún? <span onClick={()=>setInicioSesion(false)}>Crear cuenta</span></p>
          </>      
    )
}

export default Login;
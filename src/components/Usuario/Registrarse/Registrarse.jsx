import "../Login/Login.css"
import { useContext, useEffect, useState } from "react"
import { UsuarioContext } from "../../../context/UsuarioContext"

function Registrarse({setInicioSesion,inicioSesion}){
    const {registrarNuevoUsuario, 
            setRegistrarNuevoUsuario, 
            usuariosRegistrados, 
            setUsuariosRegistrados, 
            usuarioYaRegistrado, 
            mostrarUsuario, 
            setRegistroExitoso} = useContext(UsuarioContext)
    const [errorUsuarioRegistrado, setUsuarioRegistrado] = useState(false)

    // Error formulario incompleto
    const [errorCampoIncompleto, setErrorCampoIncompleto] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()

        // Tira error que falta completar parte del formulario
        if (registrarNuevoUsuario.usuario === "" || registrarNuevoUsuario.mail === "" || registrarNuevoUsuario.numero === "" || registrarNuevoUsuario.contraseña === "") {
            setErrorCampoIncompleto(true)
            return
        }

        // Agregar nuevo usuario a los usuarios ya registrados
        const yaExiste = usuarioYaRegistrado(registrarNuevoUsuario); // envia el usuario ingresado a agregarse pero verifica si ya esta registrado o no
        if(yaExiste){
            setUsuarioRegistrado(true) // Error usuario ya registrado, verificacion con el mail
            return
        }else{
            setUsuariosRegistrados([...usuariosRegistrados, registrarNuevoUsuario])
            setTimeout(()=>{
                setInicioSesion(true)
            }, 2000)
            setUsuarioRegistrado(false)
            setRegistroExitoso(true)
        }

        // Limpiar el form en el contexto
        setRegistrarNuevoUsuario({
            usuario: "",
            mail: "",
            numero: "",
            contraseña: ""
        });

    }

    useEffect(()=>{
        setRegistroExitoso(false)
    },[inicioSesion])

    // Limpia los capos del formulario cuando se cierra el modal
        useEffect(()=>{
            if(!mostrarUsuario || !inicioSesion){
                setRegistrarNuevoUsuario({
                    usuario: "",
                    mail: "",
                    numero: "",
                    contraseña: ""
                });
            }
        
          }, [mostrarUsuario])

    return(
        <>
            <form action="" className="modalUsuario-form"
                onSubmit={(e)=>handleSubmit(e)}
            >
                    <label className="modalUsuario-label" htmlFor="nombreUsuario">Crea un nombre de usuario</label>
                    <input 
                        className="modalUsuario-input" 
                        type="text" 
                        placeholder="Nombre de usuario" 
                        id="nombreUsuario"
                        value={registrarNuevoUsuario.usuario}
                        onChange={(e)=>{
                            setRegistrarNuevoUsuario({...registrarNuevoUsuario, usuario:e.target.value})
                            setErrorCampoIncompleto(false) // limpia error anterior al escribir
                        }}
                        minLength="3" 
                        maxLength="15" 
                    />
                    <label className="modalUsuario-label" htmlFor="email">Escribe tu email</label>
                    <input 
                        className="modalUsuario-input" 
                        type="email" 
                        placeholder="Email" 
                        id="email"
                        value={registrarNuevoUsuario.mail}
                        onChange={(e)=>{
                            setRegistrarNuevoUsuario({...registrarNuevoUsuario, mail:e.target.value})
                            setErrorCampoIncompleto(false) // limpia error anterior al escribir
                        }}
                        />
                    <label className="modalUsuario-label" htmlFor="celular">Escribe tu numero de celular</label>
                    <input 
                        className="modalUsuario-input" 
                        type="tel" 
                        placeholder="Celular" 
                        id="celular"
                        value={registrarNuevoUsuario.numero}
                        onChange={(e)=>{
                            setRegistrarNuevoUsuario({...registrarNuevoUsuario, numero:e.target.value})
                            setErrorCampoIncompleto(false) // limpia error anterior al escribir
                        }}    
                        minLength="8" 
                        
                    />
                    <label className="modalUsuario-label" htmlFor="contraseña">Crea una contraseña</label>
                    <input 
                        className="modalUsuario-input" 
                        type="password" 
                        placeholder="Contraseña" 
                        id="contraseña"
                        value={registrarNuevoUsuario.contraseña}
                        onChange={(e)=>{
                            setRegistrarNuevoUsuario({...registrarNuevoUsuario, contraseña:e.target.value})
                            setErrorCampoIncompleto(false) // limpia error anterior al escribir
                        }}
                        minLength="6" 
                        maxLength="20" 
                    />
                    <button className="modalUsuario-submit">Crear usuario</button>   
                    {errorCampoIncompleto && <p className="modalUsuario-error">Todos los campos son obligatorios.</p>}
                    {errorUsuarioRegistrado && <p className="modalUsuario-error">Ya hay un usuario registrado con ese mail.</p>}                
                </form>
                <p className="modalUsuario-p">¿Ya tenés una cuenta? <span onClick={()=>setInicioSesion(true)}>Iniciá sesión</span></p>
        </>
    )
}

export default Registrarse;
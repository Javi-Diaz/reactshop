import { createContext, useState } from "react";

export const UsuarioContext = createContext()

export function UsuarioProvider(props){
    // Usuario ya registrado de ejemplo
    const [usuariosRegistrados, setUsuariosRegistrados] = useState([{
        usuario: "Jose Alvarez",
        mail: "jose.alvarez@gmail.com",
        contraseña: "jose123",
        numero: 1122334455
    }])

    // Mostrar formulario de iniciar sesion o registrarse
    const [mostrarUsuario, setMostrarUsuario] = useState(false)  

    const [mostrarModalBienvenida, setMostrarModalBienvenida] = useState(false);

    const limpiarMostrarBienvenida = () => setMostrarModalBienvenida(false);
    
    // Iniciar sesion y verifica si ya esta registrado
    const [usuarioLogueado, setUsuarioLogueado] = useState(null);
    const iniciarSesion = (user)=>{
        const usuarioEncontrado = usuariosRegistrados.find((usu)=> usu.usuario.toLocaleLowerCase() === user.usuario && usu.contraseña === user.contraseña)
        
        if (usuarioEncontrado) {
            setUsuarioLogueado(usuarioEncontrado);
            setMostrarModalBienvenida(true); // <--- Guardar usuario actual
            return true;
        }
        return false;
    }

    // Cerrar sesión
    const cerrarSesion = () => {
        setUsuarioLogueado(null);
    };

    // Registrar nuevo usuario
    const [registrarNuevoUsuario, setRegistrarNuevoUsuario] = useState({
        usuario: "",
        mail: "",
        numero: "",
        contraseña: ""
    })
    const [registroExitoso, setRegistroExitoso] = useState(false)

    // Verificar si el usuario que se registra ya esta registrado
    const usuarioYaRegistrado = (user)=>{
        const usuarioRegistrado = usuariosRegistrados.find((usu)=> usu.mail === user.mail)

        if (usuarioRegistrado){
            return true
        }
        return false
    }

    const limpiarRegistroExitoso = () => setRegistroExitoso(false);

    
    
    return(
        <UsuarioContext.Provider value={{
            usuariosRegistrados,
            setUsuariosRegistrados,
            iniciarSesion,
            usuarioLogueado,
            cerrarSesion,
            mostrarUsuario,
            setMostrarUsuario,
            registrarNuevoUsuario,
            setRegistrarNuevoUsuario,
            usuarioYaRegistrado,
            registroExitoso,
            setRegistroExitoso,
            limpiarRegistroExitoso,
            mostrarModalBienvenida, 
            limpiarMostrarBienvenida
            }}>
            {props.children}
        </UsuarioContext.Provider>
    )
}
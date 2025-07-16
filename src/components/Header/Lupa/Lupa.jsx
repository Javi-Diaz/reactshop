import {FaSearch } from "react-icons/fa";
import "./Lupa.css"
import Results from "./Results";
import { useState } from "react";

function Lupa({toggleLupa, mostrarLupa}){
    const [busqueda, setBusqueda] = useState("")

    return(
        <div className={`header-lupa ${mostrarLupa ? "header-lupa-abierto" : ""}`}>
            <div className="header-lupa-boxInput">
                <input className="header-lupa-input" type="text" placeholder="Buscar" 
                    onChange={(e)=>{
                        setBusqueda(e.target.value)
                    }}
                ></input>
                <FaSearch className="header-lupa-iconoLupa"/>
            </div>
            <button className="header-lupa-btnCerrar" onClick={()=>{toggleLupa()}}>X</button>
            <div className="header-lupa-resultados"
                style={{backgroundColor: busqueda === "" ? "#00000050" : "#fff"}}
            >
                {busqueda && <h3>Productos</h3>}
                <div className="header-resultadosBusqueda">
                    {busqueda && <Results busqueda={busqueda}/>}
                </div>
            </div>
        </div>
    )
}

export default Lupa;
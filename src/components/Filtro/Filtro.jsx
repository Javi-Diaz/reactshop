import { NavLink } from "react-router-dom";
import "./Filtro.css"
import { useState, useEffect, useContext } from "react";
import { FiltroContext } from "../../context/FiltroContext";


function Filtro({toggleFiltro,abierto}) {
    const [visible, setVisible] = useState(abierto);

    useEffect(() => {
        if (abierto) setVisible(true);
    }, [abierto]);

    const handleAnimationEnd = () => {
        if (!abierto) setVisible(false);
    };

    

    const { setCategoria, setOrdenarPor, setHasta, setDesde, desde, hasta } = useContext(FiltroContext)

    // Estados de los inputs desde y hasta
    const [desdeInput, setDesdeInput] = useState(desde)
    const [hastaInput, setHastaInput] = useState(hasta)
    // Aplica el filtro de precios desde y hasta
    const aplicarFiltros = () => {
        setDesde(Number(desdeInput))  
        setHasta(Number(hastaInput))  
        toggleFiltro()
    }

    if (!visible) return null;
    
    return(
        <div className={`container-filtro ${abierto ? "animar-mostrar-filtro" : "animar-ocultar-filtro"}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className="sombra-filtro" onClick={()=>{toggleFiltro()}}></div>
            <div className="conteiner-contenido-filtro">
                <header className="header-filtro">
                <h3>Filtros</h3>
                <button
                    onClick={()=>{toggleFiltro()}}
                >X</button>
            </header>
            <div className="categorias-filtro">
                <h4>Categorias</h4>
                <NavLink onClick={()=> {
                    setCategoria("todos")
                    toggleFiltro()}
                }
                    >Todos los productos</NavLink>
                <NavLink onClick={()=> {
                    setCategoria("Remera")
                    toggleFiltro()}
                }
                    >Remeras</NavLink>
                <NavLink onClick={()=> {
                    setCategoria("Buzo")
                    toggleFiltro()}
                }
                    >Buzos</NavLink>
                <NavLink onClick={()=> {
                    setCategoria("Campera")
                    toggleFiltro()}
                }
                    >Camperas</NavLink>
                <NavLink onClick={()=> {
                    setCategoria("Jean")
                    toggleFiltro()}
                }
                    >Jeans</NavLink>
            </div>
            <div className="orden-filtro">
                <h4>Ordenar por:</h4>
                <select name="select"
                    onChange={(e)=> {
                        toggleFiltro()
                        setOrdenarPor(e.target.value)
                    }}
                >
                    <option value="">-- Seleccionar orden --</option>
                    <option value="precMenMay">Precio: Menor a mayor</option>
                    <option value="precMayMen">Precio: Mayor a menor</option>
                    <option value="alfAZ">Alfabeticamente: A - Z</option>
                    <option value="alfZA">Alfabeticamente: Z - A</option>
                </select>
            </div>
            <div className="precio-fitro">
                <h4>Precio</h4>
                <label htmlFor="desde">Desde</label>
                <input id="desde"type="number" value={desdeInput} onChange={(e)=> setDesdeInput(e.target.value)}/>
                <label htmlFor="hasta">Hasta</label>
                <input id="hasta" type="number" value={hastaInput}  onChange={(e)=> setHastaInput(e.target.value)}/>
                <button onClick={aplicarFiltros}>Aplicar</button>
            </div>
            </div>
            
        </div>
    )
}

export default Filtro;
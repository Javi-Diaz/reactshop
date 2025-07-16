import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import "./CarruselHeader.css"
import { useState, useEffect } from "react";

function CarruselHeader(){
    const textos = ["10% de descuento pagando con TRANSFERENCIA","6 cuotas sin interés", "Envíos GRATIS a partir de $50.000"]
    const [contador,setContador] = useState(0)

    const next = ()=>{
        setContador((prevContador)=>{
            if(prevContador === 2){
                return 0;
            }
            return prevContador + 1;
        })
    }

    const prev =()=>{
        setContador((prevContador)=>{
            if(prevContador === 0){
                return 2;
            }
            return prevContador - 1;
        })
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            next();
        }, 3000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalo);
    }, []);


    return(
        <div className="carruselHeader">
            <FaAngleLeft className="prev" onClick={()=>{prev()}}/>
            <h3 className="carruselText">{textos[contador]}</h3>
            <FaAngleRight className="next" onClick={()=>{next()}}/>
        </div>
    )
}

export default CarruselHeader;
import "./SlidersSecciones.css"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useContext, forwardRef } from "react";
import { ModalContext } from "../../context/ModalContext";
import {CarritoContext} from "../../context/CarritoContext";


const SlidersSecciones = forwardRef(({titulo,data, id}, externalRef) => {
    
    const containerRef = useRef(null);
    const [index, setIndex] = useState(1); 

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const width = container.clientWidth;
            
            
            let currentIndex = Math.floor((scrollLeft + width) / width) + 1;
            

            if(scrollLeft === 0) currentIndex = 1
            if(scrollLeft >= 850) currentIndex = 4
            setIndex(currentIndex);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    //Mostrar modal EnProduccion
    const { toggleModal } = useContext(ModalContext);

    // Añadir al carrito
    const {carrito, setCarrito} = useContext(CarritoContext)

    const añadirCarrito = (producto)=>{
        setCarrito(prevCarrito => {
            const nuevoCarrito = [...prevCarrito, producto];
            
            return nuevoCarrito;
        });
        
    }

    return(
        <section id={id} ref={externalRef} className="slidersSecciones">
            <h2 className="slidersSecciones-titulo">{titulo}</h2>
            <span className="slidersSecciones-posicion">{index}/{data.length}</span>
            <div className="slidersSecciones-boxCards" ref={containerRef}>
                {
                    data.map((product,index)=>{
                        return(
                            <Link key={index} >
                                <div className="slidersSecciones-card" /* onClick={toggleModal} */>
                                    <img src={product.img} alt="imagen-producto" className="slidersSecciones-card-img"/>
                                    <br />
                                    <h3>{product.name}</h3>
                                    <span>${product.price}</span>
                                    <br />
                                    <button className="slidersSecciones-card-btn" onClick={()=>añadirCarrito(product)}>Añadir al carrito</button>
                                </div>
                            </Link>

                            
                        )
                    })
                }
            </div>

            
            
        </section>
    )
})

export default SlidersSecciones;

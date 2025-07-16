import "./SlidersSecciones.css"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";


function SlidersSecciones({titulo,data}){
    
    const containerRef = useRef(null);
    const [index, setIndex] = useState(1); 

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const width = container.clientWidth;
            const currentIndex = Math.round(scrollLeft / width) + 1;
            setIndex(currentIndex);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    //Mostrar modal EnProduccion
    const { toggleModal } = useContext(ModalContext);

    return(
        <section className="slidersSecciones">
            <h2 className="slidersSecciones-titulo">{titulo}</h2>
            <span className="slidersSecciones-posicion">{index}/{data.length}</span>
            <div className="slidersSecciones-boxCards" ref={containerRef}>
                {
                    data.map((product,index)=>{
                        return(
                            <Link key={index} >
                                <div className="slidersSecciones-card" onClick={toggleModal}>
                                    <img src={product.img} alt="imagen-producto" className="slidersSecciones-card-img"/>
                                    <br />
                                    <h3>{product.name}</h3>
                                    <span>$5000</span>
                                    <br />
                                    <button className="slidersSecciones-card-btn">Añadir al carrito</button>
                                </div>
                            </Link>

                            
                        )
                    })
                }
            </div>

            
            
        </section>
    )
}

export default SlidersSecciones;
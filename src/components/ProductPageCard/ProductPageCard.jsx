import { useParams } from "react-router-dom";
import { useContext, useState, useCallback } from "react";
import { ProductsContext } from "../../context/ProductContext";
import "./ProductPageCard.css"
import { FaSearchPlus } from "react-icons/fa";
import ModalImg from "../Modales/ModalImg/ModalImg";
import { CarritoContext } from "../../context/CarritoContext";

function ProductPageCard(){
    const {id} = useParams()
    const products = useContext(ProductsContext)

    const product = products.find(p => p.id.toString() === id);

    // Mostrar imagen en grande
    const [mostrarModalImg, setMostrarModalImg] = useState(false)
    const toggleModalImg = useCallback(()=>{
        setMostrarModalImg(prev => !prev)
    },[])

    const {añadirCarrito} = useContext(CarritoContext)

    if (!product) return <h2>Producto no encontrado</h2>;

    return(
        <div className="productCard">
            <button className="productCard-btnZoom" onClick={toggleModalImg}><FaSearchPlus/></button>
            <ModalImg img={product.img} toggleModalImg={toggleModalImg} mostrarModalImg={mostrarModalImg}/>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <span>Precio: <h3>${product.price}</h3></span>
            <div className="productCard-talleBox">
                <span>Talles:</span>
                <br />
                <button>S</button>
                <button>M</button>
                <button>L</button>
            </div>
            <button className="slidersSecciones-card-btn" onClick={()=>añadirCarrito(product)}>Añadir al carrito</button>
        </div>
    )
}

export default ProductPageCard;
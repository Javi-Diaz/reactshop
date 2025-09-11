import { useMemo, useContext } from "react";
import "./Results.css"
import { ProductsContext } from "../../../context/ProductContext";
import { Link } from "react-router-dom";

function Results({busqueda}){
    const products = useContext(ProductsContext)

    const productosFiltrados = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(busqueda.toLowerCase())
        );
    }, [products, busqueda]);

    if(productosFiltrados.length === 0){ 
        return (
            <div className="cajaProduct">
                <h3>No se encontro el producto</h3>
            </div>
        )
    }else{
        return (productosFiltrados.map((product, index)=>{
            return(
                <Link key={index} to={`/products/${product.id}`}>
                    <div key={product.id} className="cajaProduct">
                        <img src={product.img} alt="imagen-producto" />
                        <h3>{product.name}</h3>
                    </div>
                </Link>
                
    
            )
        }))
    }   
  
}

export default Results;
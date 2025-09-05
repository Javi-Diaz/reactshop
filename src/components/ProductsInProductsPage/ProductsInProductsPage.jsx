import { useContext } from "react";
import { Link } from "react-router-dom"; 
import "./ProductsInProductsPage.css"
import { FiltroContext } from "../../context/FiltroContext";
import { CarritoContext } from "../../context/CarritoContext";

function ProductsInProductsPage() {
    const { productosDesdeHasta } = useContext(FiltroContext)

    const {añadirCarrito} = useContext(CarritoContext)
    
    return(
        <section className="section-products">
            {
                productosDesdeHasta.map((product,index)=>{
                    return(
                        <Link key={index} id={index}>
                            <div className="products-boxCard">
                                <img src={product.img} />
                                <br />
                                <h3>{product.name}</h3>
                                <span>${product.price}</span>
                                <br />
                                <button className="products-cardBtn" onClick={()=>añadirCarrito(product)}>Añadir al carrito</button>
                            </div>
                        </Link>
                        
                    )
            
                })
                
            }
        </section>
        
    )
}

export default ProductsInProductsPage;
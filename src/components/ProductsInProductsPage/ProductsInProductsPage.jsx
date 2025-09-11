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
                        <Link key={index} id={index} to={`/products/${product.id}`}>
                            <div className="products-boxCard">
                                <img src={product.img} />
                                <br />
                                <h3>{product.name}</h3>
                                <span>${product.price}</span>
                                <br />
                                <button className="products-cardBtn" onClick={(e)=>{
                                    e.preventDefault(); // evita que el Link se active
                                    e.stopPropagation(); // evita que el evento burbujee al Link
                                    añadirCarrito(product)
                                    }}>Añadir al carrito</button>
                            </div>
                        </Link>
                        
                    )
            
                })
                
            }
        </section>
        
    )
}

export default ProductsInProductsPage;
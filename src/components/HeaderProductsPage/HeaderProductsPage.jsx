import "./HeaderProductsPage.css"
import { FaSlidersH } from "react-icons/fa";

function HeaderProductsPage({toggleFiltro}) {

    return(
        <header className="products-header">
                <h3>Productos</h3>
                <button
                    onClick={()=>{toggleFiltro()}}
                >Filtrar <FaSlidersH/></button>
        </header>
    )
}

export default HeaderProductsPage;
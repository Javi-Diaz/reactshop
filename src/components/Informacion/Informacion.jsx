import { FaTruck } from "react-icons/fa";
import { FaShop,FaMoneyBills } from "react-icons/fa6";
import "./Informacion.css"

function Informacion(){
    return(
        <section className="informacionSection">
            <div className="informacion-boxCard">
                <FaTruck className="informacion-icono"/>
                <div className="informacion-textos">
                    <h2>Envios a todo el pais</h2>
                    <p>Correo Argentino Trasportes y Expresos</p>
                </div>
            </div>
            <div className="informacion-boxCard">
                <FaShop className="informacion-icono"/>
                <div className="informacion-textos">
                    <h2>Retiro en Sucursal</h2>
                    <p>Podes retirar tu pedido en nuestra sucursal</p>
                </div>
            </div>
            <div className="informacion-boxCard">
                <FaMoneyBills className="informacion-icono"/>
                <div className="informacion-textos">
                    <h2>Compra Minima</h2>
                    <p>Compra minima $50000</p>
                </div>
            </div>
        </section>
    )
}

export default Informacion;
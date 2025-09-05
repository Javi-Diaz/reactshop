import mp from "../../../public/img/footer/mp.jpg"
import mastercard from "../../../public/img/footer/mastercard.jpg"
import visa from "../../../public/img/footer/visa.jpg"
import american from "../../../public/img/footer/american.jpg"
import pagoFacil from "../../../public/img/footer/pagoFacil.jpg"
import "./Footer.css"
import LogoRedes from "../LogoRedes/LogoRedes";
import { HashLink } from "react-router-hash-link"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-redes">
                <h4>Redes</h4>
                <LogoRedes/>
            </div>
            <div className="footer-contacto">
                <h4>Contacto</h4>
                <p>+54 1122334455</p>
                <p>reactshop@gmail.com</p>
                <p>Direccion Reactshop 1122</p>
            </div>
            <div className="footer-categorias">
                <h4>Categorias</h4>
                <HashLink 
                smooth to="/#inicio"
                >Inicio</HashLink >
                <HashLink smooth to="/#loMasNuevo"
                >Lo mas nuevo</HashLink >
                <HashLink smooth to="/#destacado"
                >Destacado</HashLink >
                <HashLink smooth to="/#promociones"
                >Promociones</HashLink >
                <HashLink smooth to="/Products"
                >Productos</HashLink >
            </div>
            <div className="footer-pagos">
                <h4>Metodos de pago</h4>
                <img className="footer-pagos-img" src={mp} alt="metododePago" />
                <img className="footer-pagos-img" src={visa} alt="metododePago" />
                <img className="footer-pagos-img" src={mastercard} alt="metododePago" />
                <img className="footer-pagos-img" src={american} alt="metododePago" />
                <img className="footer-pagos-img" src={pagoFacil} alt="metododePago" />
            </div>
            <div className="footer-final">
                <p>© 2025 Todos los derechos reservados | REACTSHOP</p>
            </div>
        </footer>
    )
}

export default Footer;
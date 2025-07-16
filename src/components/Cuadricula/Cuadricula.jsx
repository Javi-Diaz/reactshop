import { Link } from "react-router-dom";
import imgRemera from "../../../public/img/remera3.png";
import imgBuzo from "../../../public/img/buzo3.jpeg";
import imgCampera from "../../../public/img/campera1.png";
import imgJean from "../../../public/img/pantalon2.jpeg";
import "./Cuadricula.css"
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

function Cuadricula(){
    const {toggleModal} = useContext(ModalContext)

    return(
        <section className="cuadricula">
            <Link onClick={toggleModal}>
                <div className="cuadricula-card">
                    <div className="cuadricula-card-sombra"></div>
                    <img src={imgRemera} alt="imagen-seccion" />
                    <h3>Remeras</h3>
                </div>
            </Link>
            <Link onClick={toggleModal}>
                <div className="cuadricula-card">
                    <div className="cuadricula-card-sombra"></div>
                    <img src={imgBuzo} alt="imagen-seccion" />
                    <h3>Buzos</h3>
                </div>
            </Link>
            <Link onClick={toggleModal}>
                <div className="cuadricula-card">
                    <div className="cuadricula-card-sombra"></div>
                    <img src={imgCampera} alt="imagen-seccion" />
                    <h3>Camperas</h3>
                </div>
            </Link>
            <Link onClick={toggleModal}>
                <div className="cuadricula-card">
                    <div className="cuadricula-card-sombra"></div>
                    <img src={imgJean} alt="imagen-seccion" />
                    <h3>Jeans</h3>
                </div>
            </Link>
        </section>
    )
}

export default Cuadricula;
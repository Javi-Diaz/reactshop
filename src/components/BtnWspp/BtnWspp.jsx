import { Link } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa";
import "./BtnWspp.css"

function BtnWspp(){
    return(
        <Link className="btnWspp">
            <FaWhatsapp />
        </Link>
    )
}

export default BtnWspp
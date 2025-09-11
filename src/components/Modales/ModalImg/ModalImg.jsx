import "./ModalImg.css"

function ModalImg({img, mostrarModalImg, toggleModalImg}){
    return(
        <div className={`imgBoxModal ${mostrarModalImg ? "mostrarImgBoxModal" : ""}`} >
            <button onClick={toggleModalImg}>X</button>
            <img src={img} alt="" />
        </div>
    )
}

export default ModalImg;
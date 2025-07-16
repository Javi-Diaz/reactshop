import "./ModalEnProduccion.css"

function ModalEnProduccion({toggleModal, mostrarModal}){
    
    return(
        <div className={`modalEnProduccion-container ${mostrarModal ? "modalEnProduccion-abierto" : ""}`} >
            <div onClick={()=>{toggleModal()}} className="modalEnProduccion-sombra"></div>
            <div className="modalEnProduccion-boxTextos">
                <h3>Esta funcionalidad se encuenta actualmente en desarrollo.</h3>
                <p>Estará lista muy pronto.</p>
                <button onClick={()=>{toggleModal()}}>Cerrar</button>
            </div>
            
        </div>
        
    ) 
}

export default ModalEnProduccion;
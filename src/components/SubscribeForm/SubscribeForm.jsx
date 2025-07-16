import "./SubscribeForm.css"

function SubscribeForm(){

    return(
        <section className="subscribeForm">
            <h3 className="subscribeForm-titulo">Recibi las ultimas novedades</h3>
            <p className="subscribeForm-texto">Conoce las nuevas colecciones y las ofertas exclusivas antes que nadie.</p>
            <input className="subscribeForm-input" type="text" placeholder="Correo electrónico"/>
        </section>
    )
}

export default SubscribeForm;
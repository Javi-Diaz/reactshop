import Header from "../components/Header/Header";
import Informacion from "../components/Informacion/Informacion";
import SlidersSecciones from "../components/SlidersSecciones/SlidersSecciones";
import { useMemo, useContext, Suspense, lazy, useRef } from "react";
import Cuadricula from "../components/Cuadricula/Cuadricula";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Footer from "../components/Footer/Footer";
import BtnWspp from "../components/BtnWspp/BtnWspp";
import { ProductsContext } from "../context/ProductContext";
import { ModalContext } from "../context/ModalContext";
import ModalEnProduccion from "../components/ModalEnProduccion/ModalEnProduccion";
import Loader from "../components/Loader/Loader";
const SliderInicio = lazy(()=>import("../components/SliderInicio/SliderInicio"))

function Home(){
  const products = useContext(ProductsContext)
  const { mostrarModal, toggleModal } = useContext(ModalContext);

  // Agrupación y filtrado con useMemo de SlidersSecciones
  const { primerSet, segundoSet, tercerSet } = useMemo(() => {
    const agrupados = {};

    products.forEach(product => {
      const tipo = product.type;
      if (!agrupados[tipo]) agrupados[tipo] = [];
      agrupados[tipo].push(product);
    });

    const primer = [];
    const segundo = [];
    const tercero = [];

    for (const tipo in agrupados) {
      if (agrupados[tipo][0]) primer.push(agrupados[tipo][0]);
      if (agrupados[tipo][1]) segundo.push(agrupados[tipo][1]);
      if (agrupados[tipo][2]) tercero.push(agrupados[tipo][2]);
    }

    return {
      primerSet: primer,
      segundoSet: segundo,
      tercerSet: tercero
    };
  }, [products]);

  // Redireccionamiento a las secciones
  const inicioRef = useRef();
  const loMasNuevoRef = useRef();
  const destacadoRef = useRef();
  const promocionesRef = useRef();
  

  const scrollToSection = (ref)=>{
    ref.current?.scrollIntoView({ behavior: "smooth"})
  }

    return(
        <>
            <BtnWspp/>
            <Header scrollToSection={scrollToSection} inicioRef={inicioRef} loMasNuevoRef={loMasNuevoRef} destacadoRef={destacadoRef} promocionesRef={promocionesRef}/>
            <SliderInicio id="inicio" ref={inicioRef}/>  
            <Informacion/>
            <Suspense fallback={<Loader/>}>
              <SlidersSecciones id="loMasNuevo" titulo={"Lo mas nuevo"} data={primerSet} ref={loMasNuevoRef}/>
              <SlidersSecciones id="destacado" titulo={"Destacado"} data={segundoSet} ref={destacadoRef}/>
              <SlidersSecciones id="promociones" titulo={"Promociones"} data={tercerSet} ref={promocionesRef}/>
            </Suspense>
            <Cuadricula/>
            <SubscribeForm/>
            <Footer/>
            <ModalEnProduccion mostrarModal={mostrarModal} toggleModal={toggleModal} />
        </>
    )
}

export default Home;  
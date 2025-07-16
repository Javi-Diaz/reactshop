import Header from "../components/Header/Header";
/* import SliderInicio from "../components/SliderInicio/SliderInicio"; */

import Informacion from "../components/Informacion/Informacion";
import SlidersSecciones from "../components/SlidersSecciones/SlidersSecciones";
import { useMemo, useContext, useState, Suspense, lazy } from "react";
import Cuadricula from "../components/Cuadricula/Cuadricula";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Footer from "../components/Footer/Footer";
import BtnWspp from "../components/btnWspp/btnWspp";
import { ProductsContext } from "../context/ProductContext";
import { ModalContext } from "../context/ModalContext";
import ModalEnProduccion from "../components/ModalEnProduccion/ModalEnProduccion";
import Loader from "../components/Loader/Loader";
const SliderInicio = lazy(()=>import("../components/SliderInicio/SliderInicio"))

function Home(){
  const products = useContext(ProductsContext)
  const { mostrarModal, toggleModal } = useContext(ModalContext);

  // Agrupación y filtrado con useMemo
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
  

    return(
        <>
            <BtnWspp/>
            <Header/>
            <SliderInicio/>  
            <Informacion/>
            <Suspense fallback={<Loader/>}>
              <SlidersSecciones titulo={"Lo mas nuevo"} data={primerSet} />
              <SlidersSecciones titulo={"Destacado"} data={segundoSet} />
              <SlidersSecciones titulo={"Promociones"} data={tercerSet} />
            </Suspense>
            <Cuadricula/>
            <SubscribeForm/>
            <Footer/>
            <ModalEnProduccion mostrarModal={mostrarModal} toggleModal={toggleModal} />
        </>
    )
}

export default Home;  
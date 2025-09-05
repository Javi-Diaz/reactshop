import Header from "../components/Header/Header";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Footer from "../components/Footer/Footer";
import BtnWspp from "../components/BtnWspp/BtnWspp";
import HeaderProductsPage from "../components/HeaderProductsPage/HeaderProductsPage";
import ProductsInProductsPage from "../components/ProductsInProductsPage/ProductsInProductsPage";
import Filtro from "../components/Filtro/Filtro";
import { useState, useCallback } from "react";


function Products(){
    // Mostrar filtro
    const [mostrarFiltro, setMostrarFiltro] = useState(false)

    const toggleFiltro = useCallback(()=>{
        setMostrarFiltro(prev => !prev)
    },[])
    
    return(
        <>
            <BtnWspp/>
            <Header />
            <HeaderProductsPage toggleFiltro={toggleFiltro}/>
            <ProductsInProductsPage/>
            <Filtro toggleFiltro={toggleFiltro} abierto={mostrarFiltro}/>
            <SubscribeForm/>
            <Footer/>
        </>
    )
}

export default Products;  
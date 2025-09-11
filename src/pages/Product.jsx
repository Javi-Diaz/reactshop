import BtnWspp from "../components/BtnWspp/BtnWspp";
import Header from "../components/Header/Header";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Footer from "../components/Footer/Footer";
import ProductPageCard from "../components/ProductPageCard/ProductPageCard";


function Product(){
    

    return(
        <>
            <BtnWspp/>
            <Header/>

            <ProductPageCard/>
            
            <SubscribeForm/>
            <Footer/>
        </>
    )
}

export default Product;
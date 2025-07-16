import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext()

export function ProductContextProvider(props){
	const [products, setProducts] = useState([])

	useEffect(()=>{
        fetch("/data/data.json")
            .then((response)=> response.json())
            .then((data)=> setProducts(data))
    },[])

	return(
		<ProductsContext.Provider value={products}>
			{props.children}
		</ProductsContext.Provider>
	)
}


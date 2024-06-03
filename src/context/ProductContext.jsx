import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [data, setData] = useState({productData:[], featureProducts:[]});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function getProducts() {
            try {
                const db = getFirestore();
                const querySnapShop = await getDocs(collection(db,'products'));
                const newData = querySnapShop.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                const featureData = newData.filter(item => item.featured === true);

                setData(prev => ({
                    ...prev,
                    productData: newData,
                    featureProducts: featureData,
                }));
                setIsLoading(!isLoading);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[]);


    // Obtener los datos unicos ( categorias) 
    function getUniqueData(products, property) {
        let newValue = products.productData.map(item => item[property])
        return newValue = [...new Set(newValue)];
    }

    const categoryOnlyData = getUniqueData(data, 'category');

    return (
        <ProductContext.Provider value={{data, isLoading, categoryOnlyData}}>
            {children}
        </ProductContext.Provider>
    )
}

// custon hook 
const useProductContext = () => useContext(ProductContext);
export { ProductProvider, useProductContext};
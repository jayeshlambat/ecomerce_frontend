import React, { createContext, useContext, useEffect, useState } from 'react'


// create context 
const ProductContext = createContext()

function ProductProvider({ children }) {
    // store in these state variable
    const [resproductData, setresproductData] = useState(() => {
        const storedData = localStorage.getItem("resproductData")
        return storedData ? JSON.parse(storedData):null
    })

    useEffect(() => {
        if (resproductData) {
         localStorage.setItem("resproductData",JSON.stringify(resproductData))
     }
    }, [resproductData])
    

   // console.log("resproduct data from context", resproductData);


    return (
        //provide context 
        <ProductContext.Provider value={{ resproductData, setresproductData }}>
            {
                children
            }
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext) // custom hook
export { ProductProvider }
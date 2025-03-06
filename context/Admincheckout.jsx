import React, { createContext, useContext, useEffect, useState } from 'react'

//step 1 create context
export const Adminproduct = createContext()
function AdmincheckoutProvider({ children }) {

    const [nottifications, setnottifications] = useState(() => {
        const storeddata = localStorage.getItem("nottifications")
        return storeddata ? JSON.parse(storeddata) : []
    })

    useEffect(() => {
        if (nottifications) {
            localStorage.setItem("nottifications", JSON.stringify(nottifications))
        }
    }, [nottifications])

    const [adminproduct, setadminproduct] = useState(() => {
        const storedData = localStorage.getItem("adminproduct")
        return storedData ? JSON.parse(storedData) : []
    })


    useEffect(() => {
        localStorage.setItem("adminproduct", JSON.stringify(adminproduct))
        
    }, [adminproduct])


    console.log("adminproduct from contxtpage", adminproduct);
    console.log("nottifications from contxtpage", nottifications);


    return (
        <Adminproduct.Provider value={{ adminproduct, setadminproduct, setnottifications, nottifications }} >
            {children}
        </Adminproduct.Provider>
    )
}
export const useAdminproduct = () => useContext(Adminproduct) // custom hook

export default AdmincheckoutProvider 

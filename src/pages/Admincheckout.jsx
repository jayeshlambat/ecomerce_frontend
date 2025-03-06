import React from 'react'
import axios from 'axios';
import { useProduct } from '../../context/Productcontext';
import { useAdminproduct } from '../../context/Admincheckout';


function Admincheckout() {
    const { adminproduct, setadminproduct, nottifications, setnottifications } = useAdminproduct()
    console.log("adminproduct chkoutpage", adminproduct);

    const { resproductData, setresproductData } = useProduct()
    // const [productlist, setproductlist] = useState([])
    // useEffect(() => {
    //     setproductlist(adminproduct)
    // }, [adminproduct])

    const handleaccept = async (product, index) => {
        try {
            // Send data to backend
            const response = await axios.post("https://ecomerse-backend.onrender.com/api/admin/checkproduct", product, {
                headers: {
                    'content-type': "multipart/form-data"
                }
            });
            console.log("response after  accept", response.data.productData);
            console.log("current product", response.data.currentProduct);

            setnottifications(prev => [
                ...prev,
                `your prodouct ${response.data.currentProduct.title} have been added by Admin and product id is ${response.data.currentProduct._id}`])


            alert(response.data.msg)
            setresproductData(response.data.productData)
            setadminproduct(prev => prev.filter((_, idx) => idx !== index))

        } catch (error) {
            console.log(error, "error");
        }

    }
    const handlereject = (product, index) => {

        alert("product rejected successfully")
        setnottifications(prev => [
            ...prev,
            `your product ${product.title}  get rejected from admin`])
        setadminproduct(prev => prev.filter((_, idx) => idx !== index))
    }


    return (
        <div>
            <p>checkout page</p>
            {adminproduct.length === 0 ?
                (<p>no pending products</p>)
                :
                (
                    adminproduct.map((data, index) => (
                        <div key={index}>
                            <p>{data.title}</p>
                            <button onClick={() => handleaccept(data, index)}>accept  &nbsp;</button>
                            <button onClick={() => handlereject(data, index)}>reject</button>
                        </div>
                    ))
                )
            }

        </div>
    )
}

export default Admincheckout

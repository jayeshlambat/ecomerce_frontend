import React, { useContext, useEffect, useRef } from 'react'
import axios from 'axios'
import { useState } from "react";
import { useAdminproduct } from '../../context/Admincheckout';


function BussinessPage() {

    //  const { resproductData, setresproductData } = useProduct()
    const { adminproduct, setadminproduct } = useAdminproduct()
    const [loading, setloading] = useState("")

    const [productData, setproductData] = useState({
        title: "",
        cateogery: "",
        description: "",
        discount: "",
        price: "",
        priceBeforeDiscount: "",
        measurement: "",
        additionalinfo: "",
        colors: [],
        productImage: [],

    })
    const colorimageRef = useRef(null)
    const productimageRef = useRef(null)
    //const [resproductData, setresproductData] = useState([])
    const handleSubmit = async (e) => {

        setloading("loading...")
        e.preventDefault();
        console.log("Form submission in process...");

        const formData = new FormData();

        // Append text fields correctly
        formData.append("title", productData.title);
        formData.append("cateogery", productData.cateogery);
        formData.append("description", productData.description);
        formData.append("discount", productData.discount);
        formData.append("price", productData.price);
        formData.append("priceBeforeDiscount", productData.priceBeforeDiscount);
        formData.append("measurement", productData.measurement);
        formData.append("additionalinfo", productData.additionalinfo);

        // Append product images
        for (let i = 0; i < productData.productImage.length; i++) {
            formData.append("productImage[]", productData.productImage[i]);
        }

        // Append color images
        for (let i = 0; i < productData.colors.length; i++) {
            formData.append("colors[]", productData.colors[i]);
        }

        // Log FormData contents
        for (let pair of formData.entries()) {
            console.log(pair[0] + ':', pair[1]);

        }

        try {
            // Send data to backend
            const response = await axios.post("https://ecomerse-backend.onrender.com/api/bussiness/addproduct", formData, {
                headers: {
                    'content-type': "multipart/form-data"
                }
            });
            console.log("Response Data from bussiness:", response.data.productData);


            if (response.data.productData) {
                setadminproduct(prevProducts => {
                    const updatedProducts = Array.isArray(prevProducts) ? [...prevProducts, response.data.productData] : [response.data.productData];

                    localStorage.setItem("adminproduct", JSON.stringify(updatedProducts));

                    return updatedProducts
                });
            }
            console.log("admin => ", adminproduct);

            setproductData({
                title: "",
                cateogery: "",
                description: "",
                discount: "",
                price: "",
                priceBeforeDiscount: "",
                measurement: "",
                additionalinfo: "",
                colors: [],
                productImage: []
            })
            if (colorimageRef.current) colorimageRef.current.value = ""
            if (productimageRef.current) productimageRef.current.value = ""
            setloading("")
            alert("Product added successfully!");
        } catch (error) {
            setloading("")
            console.error("Error submitting form:", error);
            alert("Failed to add product. Please try again.");
        }
    };
    console.log("from admin resproductdata bussiness page", adminproduct);

    const handleChange = (e) => {
        e.preventDefault()
        setproductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }
    const handlefile = (e) => {
        e.preventDefault()
        const { name, files } = e.target
        setproductData({
            ...productData,
            [name]: files
        })
    }



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {/* product cateogery */}
                <h1>product cateogery</h1>
                <input type="text"
                    name='cateogery'
                    placeholder='enter product cateogery'
                    value={productData.cateogery}
                    onChange={handleChange}
                    className='input-field'
                    required
                />

                {/* Product Title */}
                <h1 className="title"  >ADD PRODUCT TITLE</h1>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter product title"
                    value={productData.title}
                    onChange={handleChange}
                    className="input-field"
                    required
                />
                {/* Description */}
                <p className="label">Add description</p>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    value={productData.description}
                    onChange={handleChange}
                    className="input-field"
                    required
                />

                {/* Price Section */}
                <div>
                    <p>add discount</p>
                    <input
                        type="number"
                        placeholder='enter discount'
                        onChange={handleChange}
                        value={productData.discount}
                        name='discount'
                        className="input-field"
                    />
                    <p>add price</p>
                    <input
                        type="number"
                        placeholder='enter price'
                        onChange={handleChange}
                        value={productData.price}
                        name='price'
                        className="input-field"
                        required

                    />
                    <p>Add mrp or price before discount</p>
                    <input
                        type="number"
                        placeholder='enter before discount price'
                        onChange={handleChange}
                        value={productData.priceBeforeDiscount}
                        name='priceBeforeDiscount'
                        className="input-field"
                    />
                </div>
                {/* Measurements */}
                <p className="label">Add Measurements</p>
                <input
                    type="text"
                    placeholder='measurement'
                    value={productData.measurement}
                    name='measurement'
                    onChange={handleChange}
                />
                {/* add colors */}
                <p>add colors</p>
                <input
                    type="file"
                    multiple
                    onChange={handlefile}
                    name='colors'
                    ref={colorimageRef}
                />

                {/* additional info */}
                <p>additional info</p>
                <input
                    type="text"
                    placeholder='enter additional info'
                    name='additionalinfo'
                    value={productData.additionalinfo}
                    onChange={handleChange}
                />

                <p>add product image</p>
                <input
                    type="file"
                    multiple
                    onChange={handlefile}
                    name='productImage'
                    required
                    ref={productimageRef}
                />
                {/* Submit Button */}
                <button type="submit" className="submit-btn">Add Product</button>
            </form>

            <h1 className='text-red-600 text-4xl'>{loading} </h1>

        </div>


    );
};






export default BussinessPage


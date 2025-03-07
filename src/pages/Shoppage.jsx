import React from 'react'
import { useProduct } from '../../context/Productcontext';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FaCartArrowDown } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Rating from '@mui/material/Rating';

function Shoppage() {
    const { resproductData } = useProduct()
    console.log("productData", resproductData);


    return (
        <>
            {/* top line  */}
            <div className='topLine'>
                <p>30% off storewide-Limited time! <span> <Link to='/shop'>Shop Now</Link></span></p>
            </div>
            <div className='shop'>

                <div className="nav">
                    <p className='navLeft'>3legant</p>
                    <div className='navMid'>
                        <p><Link to='/home'>Home</Link></p>
                        <p><Link to='/shop'>Shop</Link></p>
                        <p><Link to='/product'>Product</Link></p>
                        <p><Link to='/contact'>Contact Us</Link></p>
                    </div>
                    <div className='navRight'>
                        <p> <CiSearch /></p>
                        <p> <FaCartArrowDown /></p>
                        <p>  <CgProfile /></p>
                    </div>

                </div>
                <div className='imgshop'>
                    <img className='shopimg' src='/image/shopimg.svg' alt='' />
                    <h1 className='shoptext'>Shop page</h1>
                    <p>Let's designed the place you always imagined.</p>
                </div>

                {/* products */}
                <div className="livingroomproduct">
                    {resproductData && resproductData.length > 0 ?

                        (resproductData.map((product, index) => (
                            <div key={index} className="products">
                                <img src={product.productImages[0]} alt='img' />
                                <p className='rating'><Rating
                                    sx={{ color: "black" }}
                                    name="half-rating"
                                    readOnly
                                    value={5}
                                    precision={0.5} /></p>
                                <p className='title'>{product.title}</p>
                                <div className='price'>
                                    <p>${product.price}</p>
                                    {product.priceBeforeDiscount
                                        && <p className='priceBeforeDiscount'>${product.priceBeforeDiscount}</p>}


                                </div>
                                <new>New</new>
                                {product.discount && <fifty>-{product.discount}%</fifty>}

                            </div>
                        ))
                        )
                        :
                        (<p>loading...</p>)
                    }
                </div>

            </div>
        </>
    )
}

export default Shoppage

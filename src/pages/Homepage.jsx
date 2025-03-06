import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown, FaArrowRight } from "react-icons/fa";
import { CiDeliveryTruck, CiLock } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import Footer from './Footer';



function Homepage() {
    return (
        <div className='home'>
            {/* top line  */}
            <div className='topLine'>
                <p>30% off storewide-Limited time! <span> <Link to='/shop'>Shop Now</Link></span></p>
            </div>

            <div className="nav">
                <p className='navLeft'>3legant</p>
                <div className='navMid'>
                    <p><Link to='/home'>Home</Link></p>
                    <p><Link to='/shop'>Shop</Link></p>
                    <p><Link to='/product'>Product</Link></p>
                    <p><Link to='/contact'>Contact Us</Link></p>
                    <p className='cursor-pointer'><Link to='/'>Logout</Link></p>
                </div>
                <div className='navRight'>
                    <p> <CiSearch /></p>
                    <p> <FaCartArrowDown /></p>
                    <p>  <CgProfile /></p>
                </div>

            </div>

            <img className='homeimg' src='/image/homeimg.svg' alt='' />
            <div className="content">
                <div className="thought">
                    <p>Simply Unique <span>/</span> </p>
                    <p>SimplyBetter<span>.</span></p>
                </div>
                <div className="sentenceContent">
                    <p><span>3legant</span> is a gift and decoration store based in HCMC,  vitenam.Est since 2019</p>
                </div>

            </div>
            <div className="threeproduct">
                <div className="leftimg">
                    <img src='/image/livingroom.svg' />
                    <h1 className='livingRoomTxt'>Living room</h1>
                    <span><Link to='/shop'>Shop Now &nbsp;&nbsp; &nbsp; &nbsp;<span><FaArrowRight /></span></Link></span>
                </div>
                <div className="rightimages">

                    <div className="firstImg">
                        <img src='/image/bedroom.svg' />
                        <h1 className='bedroomTxt'>Bedroom</h1>
                        <span><Link to='/shop'>Shop Now &nbsp;&nbsp; &nbsp; &nbsp;<span><FaArrowRight /></span></Link></span>
                    </div>
                    <div className="secondImg">
                        <img src='/image/kitchen.svg' />
                        <h1 className='kitchenTxt'>Kitchen</h1>
                        <span><Link to='/shop'>Shop Now &nbsp;&nbsp; &nbsp; &nbsp;<span><FaArrowRight /></span></Link></span>
                    </div>

                </div>



            </div>
            <div className="part6">
                <div className="box">
                    <span><CiDeliveryTruck /></span>
                    <h1>Free Shipping</h1>
                    <p>order above $200</p>
                </div>
                <div className="box">
                    <span><LiaMoneyBillSolid /></span>
                    <h1>Money-back </h1>
                    <p>30 day guarantee</p>
                </div>
                <div className="box">
                    <span><CiLock /></span>
                    <h1>Secure Payment</h1>
                    <p>Secured by strip</p>
                </div>
                <div className="box">
                    <span><IoCallOutline /></span>
                    <h1>24/7 Support</h1>
                    <p>Phone & Email Support</p>
                </div>
            </div>
            <div className="part7">
                <div className="part7left">
                    <img src="/image/room.svg" alt="" />
                </div>
                <div className="part7right">
                    <div className="part7content">
                        <spaan>SALE UPTO 35% OFF</spaan>
                        <h1>Hundreds of New lower prices!</h1>
                        <p>it's more affordable than ever to give every room in your home a stylish make over</p>
                        <div>
                            <span><Link to='/shop'>Shop Now &nbsp;&nbsp; &nbsp; &nbsp;<span><FaArrowRight /></span></Link></span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="part8">
                <img src='/image/combineimg.svg' alt='' />
                <div className="part8content">
                    <h1>Join Our Newsletter</h1>
                    <p>signup for deals, new product and promotions</p>
                    <div className="part8Subcontent">
                        <div>
                            <span> <CiMail /></span>
                            <p>Email adress &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <p>signup</p>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Homepage

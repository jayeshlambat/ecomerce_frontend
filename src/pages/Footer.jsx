import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className="firstline">
                <div className="Ftleftcontent">
                    <h1>3legant</h1>
                    <span>|</span>
                    <p>Gift & decoration center</p>
                </div>
                <div className="Ftrightcontent">
                    <p><Link to='/home'>Home</Link></p>
                    <p><Link to='/shop'>shop</Link></p>
                    <p><Link to='/product'>product</Link></p>
                    <p><Link to='/contact'>contact us</Link></p>
                </div>
            </div>
            <hr className='hrline'/>
            <div className="secondline">
                <div className="secondleftline">
                    <span>Copyright @ 2023 Elegant. All right reversed</span>
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                </div>
                <div className="secondrightline">
                    <p><Link to='https://www.instagram.com/'><FaInstagram /></Link></p>
                    <p><Link to='https://www.facebook.com/'><FaFacebook /></Link></p>
                    <p><Link to='https://www.youtube.com/'><FaYoutube /></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer

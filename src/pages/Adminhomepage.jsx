import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Adminhomepage() {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/')
    }
    return (
        <div>
            <Link to={'/admin/addproduct'}>add product </Link>
            <Link to={'/admin/checkout'}>Checkout&nbsp; &nbsp; &nbsp; </Link>
            <button className='cursor-pointer' onClick={handleclick}>logout </button>
        </div>
    )
}

export default Adminhomepage

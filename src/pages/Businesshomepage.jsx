import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Businesshomepage() {
  const navigate = useNavigate()
  const handlelogout = () => {
    navigate('/')
  }

  return (
    <div>
      <p>business home page</p>

      <Link to='/bussiness/home/addproduct'>add product &nbsp; &nbsp; &nbsp;</Link>
      <Link to='/bussiness/home/nottification' >nottification &nbsp; &nbsp; &nbsp;</Link>
      <button className=' cursor-pointer' onClick={handlelogout}>logout </button>
    </div>
  )
}

export default Businesshomepage

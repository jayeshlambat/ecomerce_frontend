import React, { useEffect } from 'react'
import { useAdminproduct } from '../../context/Admincheckout'

function Bussinessnotification() {
  const { nottifications } = useAdminproduct()

    console.log("notification from notification page", nottifications);



  return (
    <div>
      <p>nottification page</p>
      {nottifications.slice().reverse().map((data, index) => (
        <div key={index}>
          <h1>{data}</h1>
        </div>

      ))}


    </div>
  )
}

export default Bussinessnotification

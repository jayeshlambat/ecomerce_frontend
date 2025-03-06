import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function BussinessSignup() {

    const [formData, setformData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    }
    )
    const [message, setmessage] = useState("")
    const handleFormData = async (e) => {

        e.preventDefault();
        // setformData((prev) => ({
        //     ...prev,
        //     [e.target.name]: e.target.value
        // }))
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });


    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://ecomerse-backend.onrender.com/api/bussiness/bussinesssignup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ formData })
            })

            console.log("response line 40", response);

            const data = await response.json()
            console.log("data", data);
            if (!response.ok) {
                setmessage(data.message)
            }
            if (response.ok) {
                setmessage(data.message)
            }
            setformData({
                name: "",
                username: "",
                email: "",
                password: ""
            })

        } catch (error) {
            console.log("error", error);
        }
    }


    return (
        <div className='mainDiv' >
            <div >
                {/* left */}
                {/* image */}
                <img src="/image/authImage.svg" alt='error' className='authImg' />
            </div>
            <div className='mainright'>
                <div className='right'>
                    {/* right */}
                    {/* signup form  */}
                    <div className='signup'>
                        <h1>Sign up Bussiness </h1>
                        <p>Already have an account? <Link to='/bussinesslogin'>Sign in</Link> </p>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className='form'>
                            <div className='formtag'>
                                <label className="formlabel" htmlFor="">Your name</label>
                                <input type='text' onChange={handleFormData} name='name' value={formData.name} />
                            </div>
                            <div className='formtag'>
                                <label className="formlabel" htmlFor="">username</label>
                                <input type='text' onChange={handleFormData} name='username' value={formData.username} />
                            </div>
                            <div className='formtag'>
                                <label className="formlabel" htmlFor="">Email adress</label>
                                <input type='email' onChange={handleFormData} name='email' value={formData.email} />
                            </div>
                            <div className='formtag'>
                                <label className="formlabel" htmlFor="">password</label>
                                <input type='password' onChange={handleFormData} name='password' value={formData.password} />
                            </div>

                            <p>i agree with <span>privacy policy</span> and <span>Terms of use</span></p>

                            <button type='submit' >Signup</button>
                            <h1>{message}</h1>
                        </div>
                    </form>
                    <div className="xtralogin">
                        <p className='admin' > <Link to='/adminlogin'> Admin Login</Link>  </p>
                        <p className='admin' > <Link to='/signin'> User Login</Link>  </p>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default BussinessSignup

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function AdminSignin() {
    const [loginDetail, setloginDetail] = useState([{
        userNameOrEmail: "",
        password: "",
    }])
    const [message, setmessage] = useState("")
    const navigate = useNavigate()
    const handleloginDetail = async (e) => {
        e.preventDefault()
        setloginDetail((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ecomerse-backend.onrender.com/api/admin/adminlogin', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ loginDetail })
            })
            console.log("response :", response);

            const data = await response.json()
            console.log("login data", data);

            if (!response.ok) {
                setmessage(data.message)
            }
            if (response.ok) {
                alert(data.message)
                navigate("/admin/home")
            }
            setloginDetail({
                userNameOrEmail: "",
                password: ""
            })
        } catch (error) {
            console.log("error", error);
        }
    }
    return (
        <div className='mainDiv'>
            <div>
                {/* left */}
                {/* image */}
                <img src="/image/authImage.svg" alt='error' className='authImg' />
            </div>
            <div className='right'>
                {/* right */}
                {/* signup form  */}
                <div className='signup'>
                    <h1>Admin login</h1>

                </div>
                <form onSubmit={handleSubmit}>

                    <div className='form'>
                        <div className='formtag'>
                            <label className="formlabel" htmlFor="">Username or Email adress </label>
                            <input type='text' onChange={handleloginDetail} name='userNameOrEmail' value={loginDetail.userNameOrEmail} />
                        </div>
                        <div className='formtag'>
                            <label className="formlabel" htmlFor="">password</label>
                            <input type='password' onChange={handleloginDetail} name='password' value={loginDetail.password} />
                        </div>


                        <div className='fpwd'>
                            <span>Remember me </span>
                            <p >Forgot password</p>
                        </div>
                        <button type='submit' onSubmit={handleSubmit}>Signin</button>
                        <h1>{message}</h1>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default AdminSignin

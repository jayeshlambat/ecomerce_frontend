
import './App.css'
import AuthForm from './components/AuthForm'
import { Route, Routes } from "react-router-dom"
import Signin from './components/Signin'
import AdminSignin from './components/AdminSignin'
import Shoppage from './pages/Shoppage'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import Contactpage from './pages/Contactpage'
import Adminpage from './pages/Adminpage'
import { ProductProvider } from '../context/Productcontext'
import BussinessLogin from './components/BussinessLogin'
import BussinessSignup from './components/BussinessSignup'
import BussinessPage from './pages/BussinessPage'
import AdmincheckoutProvider from '../context/Admincheckout'
import Admincheckout from './pages/Admincheckout'
import Adminhomepage from './pages/Adminhomepage'
import Bussinessnotification from './pages/Bussinessnotification'
import Businesshomepage from './pages/Businesshomepage'



function App() {
  return (

    <div>
      <AdmincheckoutProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<AuthForm />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/admin/home' element={<Adminhomepage />} />
            <Route path='/adminlogin' element={<AdminSignin />} />
            <Route path='/admin/addproduct' element={<Adminpage />} />
            <Route path='/admin/checkout' element={<Admincheckout />} />
            <Route path='/bussinesslogin' element={<BussinessLogin />} />
            <Route path='/bussinesssignup' element={<BussinessSignup />} />
            <Route path='/bussiness/home' element={<Businesshomepage />} />
            <Route path='/bussiness/home/addproduct' element={<BussinessPage />} />
            <Route path='/bussiness/home/nottification' element={<Bussinessnotification />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/shop' element={<Shoppage />} />
            <Route path='/product' element={<Productpage />} />
            <Route path='/contact' element={<Contactpage />} />
          </Routes>

        </ProductProvider>
      </AdmincheckoutProvider>
    </div>

  )
}

export default App

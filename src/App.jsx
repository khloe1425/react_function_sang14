import React from 'react'
import HeaderHome from './components/HeaderHome'
import CardProduct from './components/CardProduct'
import Home from './components/baitap1/Home'
import DataBinding from './databinding/DataBinding'
import DemoEventHandler from './eventHandler/DemoEventHandler'
import ConditionalRendering from './conditionalRendering/ConditionalRendering'
import DemoState from './state/DemoState'
import ChangeAvatar from './state/ChangeAvatar'
import ChangeCar from './state/ChangeCar'
import DemoProps from './props/DemoProps'
import ShoesShop from './props/ShoesShop/ShoesShop'
import BaiTapXemCT from './props/ShoppingCart/BaiTapXemCT'
import ShoesPage from './API/ShoesPage'
import LoginForm from './form/LoginForm'
import LoginFormik from './form/LoginFormik'

//Cấu hình react router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Register from './pages/Register'
import HeaderRoute from './components/HeaderRoute'
import HomeTemplate from './Templates/HomeTemplate'
import FormTemplate from './Templates/FormTemplate'
import Page404 from './pages/Page404'
import AdminTemplate from './Templates/AdminTemplate'
import Dashboard from './pages/Dashboard'
import ProductManagement from './pages/ProductManagement'
import CustomerManagement from './pages/CustomerManagement'
import Detail from './pages/Detail'
import Search from './pages/Search'
import AddProduct from './pages/ProductManagement/AddProduct'

//Component chính 
const App = () => {

    return (
        <BrowserRouter>
            {/* <HeaderRoute/> */}

            <Routes>
                {/* http://127.0.0.1:5173/contact */}
                <Route path='' element={<HomeTemplate />} >
                    {/* <Route path='' element={<HomePage/>} ></Route> */}
                    <Route index element={<HomePage />} ></Route>
                    <Route path='home' element={<HomePage />} ></Route>
                    <Route path='contact' element={<Contact />} ></Route>
                    <Route path='detail'>
                        <Route path=':pid' element={<Detail/>}></Route>
                    </Route>
                    <Route path='search' element={<Search />}></Route>

                    <Route path='*' element={<Page404 />}></Route>
                </Route>

                {/* http://127.0.0.1:5173/user/login */}
                <Route path='user' element={<FormTemplate />}>
                    <Route path='login' element={<Login />} ></Route>
                    <Route path='register' element={<Register />} ></Route>
                    {/* <Route path='*' element={<Page404 />}></Route> */}
                    <Route path='*' element={<Navigate to='./login' />}></Route>
                </Route>

                {/* http://127.0.0.1:5173/admin/dashboard */}
                <Route path='admin' element={<AdminTemplate />}>
                    <Route path='dashboard' element={<Dashboard />} ></Route>
                    <Route path='product' element={<ProductManagement />} ></Route>
                    <Route path='add-product' element={<AddProduct />} ></Route>
                    <Route path='customer' element={<CustomerManagement />} ></Route>
                    <Route path='*' element={<Navigate to='./dashboard' />}></Route>
                </Route>


            </Routes>
        </BrowserRouter>



    )
}

export default App
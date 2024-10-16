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
// import BaiTapXemCT from './props/XemChiTiet/BaiTapXemCT'

//Component chính 
const App = () => {
    //Chỉ đc return 1 object jsx
    return (
        //Fragment : không bị lỗi cú pháp react và không tạo dư thẻ div
        <>
            <div className="container py-5">
               <ShoesPage/>
            </div>

        </>

    )
}

export default App
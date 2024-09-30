import React from 'react'
import HeaderHome from './components/HeaderHome'
import CardProduct from './components/CardProduct'
import Home from './components/baitap1/Home'

//Component chính 
const App = () => {
    //Chỉ đc return 1 object jsx
    return (
        //Fragment : không bị lỗi cú pháp react và không tạo dư thẻ div
        <>
            <Home />
            <div className='container'>
                <h1>Hello React</h1>
                {/* đặt tên in hoa chữ đầu để nhấn mạnh component tự tạo */}
                <HeaderHome />
                <HeaderHome></HeaderHome>
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </>
        
    )
}

export default App
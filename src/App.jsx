import React from 'react'
import HeaderHome from './components/HeaderHome'
import CardProduct from './components/CardProduct'
import Home from './components/baitap1/Home'
import DataBinding from './databinding/DataBinding'
import DemoEventHandler from './eventHandler/DemoEventHandler'
import ConditionalRendering from './conditionalRendering/ConditionalRendering'
import DemoState from './state/DemoState'

//Component chính 
const App = () => {
    //Chỉ đc return 1 object jsx
    return (
        //Fragment : không bị lỗi cú pháp react và không tạo dư thẻ div
        <>
            <div className="container">
                {/* <DataBinding /> */}
                {/* <DemoEventHandler/> */}
                {/* <ConditionalRendering/> */}
                <DemoState/>
            </div>

        </>

    )
}

export default App
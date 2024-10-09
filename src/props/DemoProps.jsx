import React from 'react'
import CardChild from './CardChild'
import PostDemo from './PostDemo'
import ModalComponent from './ModalComponent'
import ChangeCar from '../state/ChangeCar'
import DemoPropChildrend from './DemoPropChildrend'

const DemoProps = () => {
    //Parent component

    let handleLike =() => { 
        console.log("Like")
     }

    return (
        <>
            <div className='row'>
                <div className="col-4">
                    <CardChild productName="Product 1" price="500" handleLike={handleLike} />
                </div>
                <div className="col-4">
                    <CardChild productName="Product 2" price="600" />
                </div>
                <div className="col-4">
                    <CardChild productName="Product 3" price="700" />
                </div>
                <div className="col-4">
                    <CardChild />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <PostDemo contentObject={{
                        title: "Bài post 1",
                        desc: "Lorem ipsum dolor sit amet.",
                        view: 100
                    }} />
                    <PostDemo />
                </div>
                <div className='col-12'>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal"   >Click</button>
                </div>
            </div>
            {/* Tạo template */}
            {/* truyền 1 component vào props         */}
            <ModalComponent title="Change Car" contentJSX={<ChangeCar />} />

            <DemoPropChildrend >
                <ChangeCar />
            </DemoPropChildrend>


        </>

    )
}

export default DemoProps
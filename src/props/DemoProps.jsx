import React from 'react'
import CardChild from './CardChild'
import PostDemo from './PostDemo'

const DemoProps = () => {
    //Parent component

    return (
        <>
            <div className='row'>
                <div className="col-4">
                    <CardChild productName="Product 1" price="500" />
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
                        title:"Bài post 1",
                        desc:"Lorem ipsum dolor sit amet.",
                        view:100
                    }}   />
                    <PostDemo />
                </div>
            </div>
        </>

    )
}

export default DemoProps
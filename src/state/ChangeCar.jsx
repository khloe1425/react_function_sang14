import React, { useState } from 'react'

const ChangeCar = () => {


    // let urlImg = useState("./public/img/black-car.jpg")[0]
    // let setImg = useState("./public/img/black-car.jpg")[1]

    // Destructuring (bóc tách phần tử mảng)
    let [urlImg, setImg] = useState("./public/img/black-car.jpg")
    

    let changeCar = (color) => {
        console.log(color)
        // set lại state
        let newURL = `./public/img/${color}-car.jpg`
        setImg(newURL)
    }

    return (
        <>
            <h2>Change car color</h2>
            <div className='row'>
                <div className="col-6">
                    {/* <img src="../assets/img/black-car.jpg" alt="" /> */}

                    {/* <img src="./src/assets/img/black-car.jpg" alt="" /> */}

                    <img style={{ width: "100%" }} src={urlImg} alt="" />
                </div>
                <div className="col-6">
                    <button onClick={() => {
                        changeCar("red")
                    }} 
                    type="button" className="btn btn-danger me-3">Red Color</button>
                    <button onClick={() => {
                        changeCar("silver")
                    }} 
                     type="button" className="btn btn-secondary me-3">Silver Color</button>
                    <button onClick={() => {
                        changeCar("black")
                    }}  type="button" className="btn btn-dark">Black Color</button>
                </div>
            </div>
        </>
    )
}

export default ChangeCar
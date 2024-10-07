import React from 'react'

const CardChild = (props) => {
    //props: tham số object có sẵn của function component
    console.log(props) 

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text">$ {props.price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default CardChild
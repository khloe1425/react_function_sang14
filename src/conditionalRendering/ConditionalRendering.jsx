import React from 'react'

const ConditionalRendering = () => {
 
    let food = {
        id:"f001",
        name:"Tôm hùm",
        img:"https://picsum.photos/200",
        price:5000,
        status:false
    }

    // C1
    let renderStatus = () => { 
        if(food.status){
            return <span className="badge text-bg-success">Còn</span>
        }else{
            return <span className="badge text-bg-danger">Hết</span>
        }
     }

    return (
        <div className='row'>
            <div className="col-3">
                <div className="card">
                    <img src={food.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{food.name} {renderStatus()}</h5>
                        
                        <h5 className="card-title">{food.name} {food.status ? <span className="badge text-bg-success">Còn</span> : <span className="badge text-bg-danger">Hết</span>}</h5>
                        <p className="card-text">{food.price}</p>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConditionalRendering


/**
 * JS
 * content = `
 *     <span>
 *          ${food.status ? Còn : Hết}
 *     </span>
 * `
 * 
 * dom.getbyid().innerHTML = content
 */
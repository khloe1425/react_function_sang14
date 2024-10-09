import React from 'react'

const ProductItem = (props) => {

    let {product} = props
    let {name, price} = props.product

  return (
      <div className="card">
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{name} </h5>
              <p className="card-text">${price} </p>
              <a href="#" className="btn btn-primary">Add to Card</a>
          </div>
      </div>
  )
}

export default ProductItem
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {

  let [arrShoes, setArrShoes] = useState([])

  let getAPI = () => {

    // GET request for remote image in node.js
    axios({
      method: 'get',
      url: 'https://apistore.cybersoft.edu.vn/api/Product'
    }).then((response) => {
      console.log(response.data.content)

      setArrShoes(response.data.content)

    }).catch((error) => {
      console.log(error)
    })


  }

  let renderShoes = () => {
    return arrShoes.map((shoes) => {
      return <div className="col-4" key={`product - ${shoes.id}`} >
        {/* bs5-card-default */}
        <div className="card">
          <img className="card-img-top" src={shoes.image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{shoes.name}</h4>
            <p className="card-text">{shoes.price}</p>
          </div>
        </div>
      </div>
    })
  }

  useEffect(() => {
    getAPI()
  }, [])


  return (
    <div className='row'>
      {renderShoes()}
    </div>
  )
}

export default HomePage
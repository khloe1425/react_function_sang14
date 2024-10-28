import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Detail = () => {
  let [proDetail, setProDetail] = useState({})
  // http://127.0.0.1:5173/detail/1
  const param = useParams()
  console.log(param.pid)

  let getProductByID = () => {
    axios({
      method: 'get',
      url: `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.pid}`
    }).then((response) => {

      console.log(response.data.content)
      setProDetail(response.data.content)

    }).catch((error) => {

      console.log(error)

    })
  }

  // useEffect(() => {
  //   getProductByID()
  // }, []) // gọi API 1 lần
  useEffect(() => {
    getProductByID()
  }, [param.pid]) // tham số thứ 2 có giá trị => gọi API khi param.pid thay đổi



  return (
    <>
      <div className='row'>
        <div className="col-4">
          <img style={{ width: "100%" }} src={proDetail.image} alt="" />
        </div>
        <div className="col-8">
          <h2>{proDetail.name}</h2>
          <p>{proDetail.description}</p>
          <p>{proDetail.price}</p>
          <div>
            <p>Select size</p>
            {proDetail.size?.map((size) => {
              return <button className='btn btn-outline-secondary'>{size}</button>
            })}

          </div>
        </div>
      </div>
      <h2>Related products</h2>
      <div className="row">
        {proDetail.relatedProducts?.map((product) => {
          return <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={product.image} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                {/* <a href={`/detail/${product.id}`} className='btn btn-success'>View detail</a> */}
                <NavLink to={`/detail/${product.id}`} className='btn btn-success'>View detail</NavLink>
              </div>
            </div>
          </div>
        })}

      </div>
    </>
  )
}

export default Detail
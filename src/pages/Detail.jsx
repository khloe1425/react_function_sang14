import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  let [proDetail,setProDetail] = useState({})
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

  useEffect(() => {
    getProductByID()
  }, [])

  return (
    <div>
      <h2>{proDetail.name}</h2>
    </div>
  )
}

export default Detail
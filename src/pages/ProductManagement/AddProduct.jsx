import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

const AddProduct = () => {
  let navigate = useNavigate()

  let proAddFormik = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
      type: "Apple",
      deleted: false //sản phẩm được xóa hay chưa
    },
    onSubmit: async (values) => {
      console.log(values)
      let res = await axios.post('https://apitraining.cybersoft.edu.vn/api/ProductApi/create', values)
      alert("thêm thành công")
      navigate('../product')

    }
  })


  
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={proAddFormik.handleSubmit} className='w-50'>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input onChange={proAddFormik.handleChange} type="text" className="form-control" name="id" id='id' />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên sp</label>
          <input onChange={proAddFormik.handleChange} type="text" className="form-control" name="name" id='name' />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">price</label>
          <input onChange={proAddFormik.handleChange} type="number" className="form-control" name="price" id='price' />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <input onChange={proAddFormik.handleChange} type="text" className="form-control" name="description" id='description' />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image URL</label>
          <input onChange={proAddFormik.handleChange} type="text" className="form-control" name="img" id='img' />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default AddProduct
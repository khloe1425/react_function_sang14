import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'

const EditProduct = () => {

  let param = useParams()
  let { productID } = param

  let navigate  = useNavigate()

  let proEditFormik = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
      type: "",
      deleted: false //sản phẩm được xóa hay chưa
    },
    onSubmit: async (values) => {
      console.log(values)
      let res = await axios.put(`https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${productID}`, values)
      console.log(res)
      alert("Cập nhật thành công")
      // navigate('/admin/product')
      navigate('../../product')
    }
  })

  let getProByID = async () => {
    let res = await fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${productID}`)
    let data = await res.json()
    // console.log(data.content)
    //Lấy data đưa lên form
    // proEditFormik.setFieldValue('id', data.content.id)
    // proEditFormik.setFieldValue('name', data.content.description) // cho phép đưa dữ liệu tùy biến
    // proEditFormik.setValues(data.content)
    proEditFormik.setValues(data)


  }

  useEffect(() => {
    getProByID()
  }, []) // gọi 1 lần khi render component





  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={proEditFormik.handleSubmit} className='w-50'>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input disabled value={proEditFormik.values.id} onChange={proEditFormik.handleChange} type="text" className="form-control" name="id" id='id' />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên sp</label>
          <input value={proEditFormik.values.name} onChange={proEditFormik.handleChange} type="text" className="form-control" name="name" id='name' />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="alias" className="form-label">Tên alias (SEO)</label>
          <input value={proEditFormik.values.alias} onChange={proEditFormik.handleChange} type="text" className="form-control" name="alias" id='alias' />
        </div> */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">price</label>
          <input value={proEditFormik.values.price} onChange={proEditFormik.handleChange} type="number" className="form-control" name="price" id='price' />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <input value={proEditFormik.values.description} onChange={proEditFormik.handleChange} type="text" className="form-control" name="description" id='description' />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="quantity" className="form-label">quantity</label>
          <input value={proEditFormik.values.quantity} onChange={proEditFormik.handleChange} type="number" className="form-control" name="quantity" id='quantity' />
        </div> */}
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image URL</label>
          <input value={proEditFormik.values.img} onChange={proEditFormik.handleChange} type="text" className="form-control" name="img" id='img' />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default EditProduct




// id: '',
//   name: "",
//     alias: "",
//       price: 0,
//         description: "",
//           size: [],
//             shortDescription: "",
//               quantity: 0,
//                 categories: [],
//                   relatedProducts: [],
//                     image: "",
//                       imgLink: ""

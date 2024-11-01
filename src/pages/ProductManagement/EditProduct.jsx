import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'

const EditProduct = () => {

  let param = useParams()
  let { productID } = param

  let proEditFormik = useFormik({
    initialValues: {
      id: '',
      name: "",
      alias: "",
      price: 0,
      description: "",
      size: [],
      shortDescription: "",
      quantity: 0,
      categories: [],
      relatedProducts: [],
      image: "",
      imgLink: ""
    },
    onSubmit: (values) => { 
      console.log(values)
     }
  })

  let getProByID = async () => {
    let res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${productID}`)
    let data = await res.json()
    // console.log(data.content)
    //Lấy data đưa lên form
    // proEditFormik.setFieldValue('id', data.content.id)
    // proEditFormik.setFieldValue('name', data.content.description) // cho phép đưa dữ liệu tùy biến
    proEditFormik.setValues(data.content)


  }

  useEffect(() => {
    getProByID()
  }, []) // gọi 1 lần khi render component





  return (
    <div>
      <h1>EditProduct</h1>
      <form className='w-50'>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input value={proEditFormik.values.id} type="text" className="form-control" name="id" id='id' />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên sp</label>
          <input value={proEditFormik.values.name} type="text" className="form-control" name="name" id='name' />
        </div>
        <div className="mb-3">
          <label htmlFor="alias" className="form-label">Tên alias (SEO)</label>
          <input type="text" className="form-control" name="alias" id='alias' />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">price</label>
          <input type="number" className="form-control" name="price" id='price' />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <input type="text" className="form-control" name="description" id='description' />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">quantity</label>
          <input type="number" className="form-control" name="quantity" id='quantity' />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" name="image" id='image' />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default EditProduct




//   "id": 0,
//   "name": "string",
//   "alias": "string",
//   "price": 0,
//   "description": "string",
//   "size": [
//     0
//   ],
//   "shortDescription": "string",
//   "quantity": 0,
//   "categories": [
//     {
//       "id": "string",
//       "category": "string"
//     }
//   ],
//   "relatedProducts": [
//     0
//   ],
//   "image": "string",
//   "imgLink": "string"

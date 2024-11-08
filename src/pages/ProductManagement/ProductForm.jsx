import React, { useEffect } from 'react'
import { Navigate, useMatch, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'

const ProductForm = () => {

    const navigate = useNavigate();

    const match = useMatch('/admin/product-form/:productID')
    console.log(match) //null => add, ngược lại => edit

    //chuyển kết quả của match thành boolean
    const isEdit = !!match; // true: edit, false: add
    console.log(isEdit)

    let proFormik = useFormik({
        initialValues: {
            id: "",
            name: "",
            price: "",
            img: "",
            description: "",
            type: "Apple",
            deleted: false //sản phẩm được xóa hay chưa
        },
        onSubmit: async (data) => {
            console.log(data)

            //Giả sử ban đầu là Add
            let url = "https://apitraining.cybersoft.edu.vn/api/ProductApi/create"
            let method = "POST"
            if(isEdit){
                // Nếu là edit => update giá tri của url và method thành Edit
                url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${match.params.productID}`
                method = "PUT"
            }

            // let res = await axios({
            //     url: url,
            //     method:method,
            //     data: data
            // })
            // console.log(res.data)

            //Object literal (JS-ES6)
            //Nếu tên thuộc tính trùng tên biến giá trị => rút gọn giữ lại tên thuộc tính
            let res = await axios({
                url,
                method,
                data
            })
            console.log(res.data)

            navigate('/admin/product', {state:"abc"}) //truyền ngầm giá trị

        }
    })


    let getProByID = async () => {
        let res = await fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${match.params.productID}`)
        let data = await res.json()
        proFormik.setValues(data)
    }

    useEffect(() => { 
        //Khi load component lần đầu => kiểm tra có phải edit ko (khi chuyển từ component khác vào component form)
        if (isEdit){
            getProByID()
        }
       
    }, [isEdit]) // gọi lại API khi isEdit thay đổi (khi đang thay đổi ở component hiện tai)




    return (
        <div>
            <h1>{isEdit ? "Edit Product" : "Add Product"}</h1>
            <form onSubmit={proFormik.handleSubmit} className='w-50'>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input disabled={isEdit} value={proFormik.values.id} onChange={proFormik.handleChange} type="text" className="form-control" name="id" id='id' />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên sp</label>
                    <input value={proFormik.values.name} onChange={proFormik.handleChange} type="text" className="form-control" name="name" id='name' />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input value={proFormik.values.price} onChange={proFormik.handleChange} type="number" className="form-control" name="price" id='price' />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input value={proFormik.values.description} onChange={proFormik.handleChange} type="text" className="form-control" name="description" id='description' />
                </div>

                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image URL</label>
                    <input value={proFormik.values.img} onChange={proFormik.handleChange} type="text" className="form-control" name="img" id='img' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default ProductForm
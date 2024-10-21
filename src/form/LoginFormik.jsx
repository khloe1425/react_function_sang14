import React from 'react'
import { useFormik } from 'formik'; // get value
import * as Yup from 'yup';// validation

const LoginFormik = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            gender:'male',
            country:'VN'
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email bắt buộc phải nhập").email("Email chưa đúng định dạng")
        }),
        onSubmit:(values) => { 
            console.log(values)
            //call API
         }
    })



    return (
        <>
            <form onSubmit={formik.handleSubmit} className='w-50'>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} data-type='email' type="text" className="form-control" name="email" placeholder="Enter email" />

                    {formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p> : null}

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onChange={formik.handleChange} data-type='password' type="password" className="form-control" name="password" placeholder="Enter password" />

                </div>
                <div className="mb-3">
                    <input onChange={formik.handleChange} value={'male'} className="form-check-input" type="radio" name="gender" id="radio1" />
                    <label className="form-check-label" htmlFor="radio1">
                        Nam
                    </label>

                    <input onChange={formik.handleChange} value={'female'} className="form-check-input ms-3" type="radio" name="gender" id="radio2" />
                    <label className="form-check-label" htmlFor="radio2">
                        Nữ
                    </label>

                </div>
                <div className="mb-3">
                    <label htmlFor="">Quốc gia</label>
                    <select onChange={formik.handleChange} name="country" className="form-select" aria-label="Default select example">
                        <option value={'VN'}>Vietnam</option>
                        <option value={'USA'}>USA</option>
                        <option value={'CN'}>China</option>
                    </select>

                </div>

                <div className="mb-3">
                    <button type='submit' className='btn btn-info'>Login</button>
                </div>
            </form>


        </>
    )
}

export default LoginFormik
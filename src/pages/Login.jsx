import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const frm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values)
      //kiểm tra sau khi submit
      if (values.username == "admin") {
        //chuyển về trang admin
        navigate('/admin/dashboard')
      } else {
        //chuyển về trang user
        // navigate('/home')
        navigate('/home',{replace:true})
      }

    }
  })


  return (
    <div>
      <form onSubmit={frm.handleSubmit} >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input onChange={frm.handleChange} name='username' type="text" className="form-control" id="username" />

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input onChange={frm.handleChange} name='password' type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
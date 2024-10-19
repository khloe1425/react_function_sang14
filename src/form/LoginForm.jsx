import React, { useState } from 'react'

const LoginForm = () => {

    //Đặt giá trị ở thuộc tính name
    // => đặt theo tên thuộc tính của BE
    let accountBE = {
        email: "",
        password:""
    }

    //Lấy data từ form => lưu ở state (xử lý thông báo lỗi cho validation)
    // phân tích data cần lưu vào state : dựa vào dữ liệu login BE, UI của login
    let [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    console.log(userLogin);


    let handleInput = (e) => { 
        let value = e.target.value
        let name = e.target.name //giá trị của thuộc tính name
        //lưu vào state
        //Object literal => cho phép đặt tên thuộc tính bằng biến => tạo tên thuộc tính động
        let newUser = { ...userLogin, 
            [name]: value 
        }
        setUserLogin(newUser)
     }



    // onSubmit = {} 
    return (
        <>
            <form className='w-50'>
                <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleInput} placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleInput} placeholder="Enter password" />
                </div>
                <div className="mb-3">
                    <button type='submit' className='btn btn-info'>Login</button>
                </div>
            </form>


        </>
    )
}

export default LoginForm


// JS
/**
 * let accountBE = {
        email: "test@gmail.com",
        password:"123"
    }
 * 
 * B1: Copy thuộc từ objectState cũ sang newObjState
 * B2: Cập nhật giá trị của thuộc tính cần đổi
 * 
 * ES6 trở đi
 * let newAccBE = {...accountBE}
 * newAccBE.email = "giá trị mới"
 * 
 * => cách gọn
 * //? Nếu thuộc tính sau dấu "," đã có trong obj => cập nhật giá trị
 * let newAccBE = {...accountBE, email:"giá trị mới"} 
 * 
 * //? Nếu thuộc tính sau dấu "," chưa có trong obj => thêm mới thuộc tính
 * let newAccBE = {...accountBE, age:"them thuộc tính mới"} 
 */
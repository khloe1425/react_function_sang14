import React, { useState } from 'react'

const LoginForm = () => {

    //Đặt giá trị ở thuộc tính name
    // => đặt theo tên thuộc tính của BE
    let accountBE = {
        email: "",
        password: ""
    }

    //Lấy data từ form => lưu ở state (xử lý thông báo lỗi cho validation)
    // phân tích data cần lưu vào state : dựa vào dữ liệu login BE, UI của login
    let [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })



    let [errorLogin, setErrorLogin] = useState(
        {
            email: "",
            password: ""
        }
    )


    let handleInput = (e) => {
        // let value = e.target.value
        // let name = e.target.name //giá trị của thuộc tính name

        let { value, name } = e.target

        //lưu vào state
        //Object literal => cho phép đặt tên thuộc tính bằng biến => tạo tên thuộc tính động
        let newUser = {
            ...userLogin,
            [name]: value
        }

        let attrVal = e.target.getAttribute('data-type')
        let messError = ""
        if (value == "") {
            //kiểm dữ liệu rỗng
            messError = `${name} không được để trống`
        } else {
            //kiểm tra loại định dạng (email, pass, phone)
            // data-type => giúp kiểm tra loại định dạng
            switch (attrVal) {
                case 'email':
                    //kiểm tra theo định dạng email 
                    //Regular expression (regex) 
                    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    // test(), match()
                    //regexEmail.test(value) == false 
                    if (!regexEmail.test(value)) {
                        messError = `${name} không đúng định dạng`
                    } else {
                        messError = ""
                    }
                    console.log(messError)
                    break;
                case 'password':
                    //ít nhất 1 ký tự số, 1 chữ, 1 in hoa, 1 đặc biệt , độ dài (6,12)
                    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,12}$/;
                    if (!regexPass.test(value)) {
                        messError = `${name} không đúng định dạng`
                    } else {
                        messError = ""
                    }
                    console.log(messError)
                    break;
                default:
                    break;
            }

        }

        let newError = {
            ...errorLogin,
            [attrVal]: messError
        }

        setErrorLogin(newError)

        setUserLogin(newUser)
    }


    let handleSubmit = (e) => {
        e.preventDefault(); // chặn load trang của button submit
        // chặn truyền data khi form còn lỗi

        //Kiểm tra có lỗi trong error không 
        //duyệt đối tượng
        for (let key in errorLogin) {
            //key tên thuộc tính, errorLogin đối tượng
            if (errorLogin[key] !== "") {
                //dừng hàm submit
                console.log("Trường còn lỗi: ", key)
                return;
            }
        }

        console.log("submit")

    }




    console.log(userLogin, errorLogin);
    // onSubmit = {} 
    return (
        <>
            <form onSubmit={handleSubmit} className='w-50'>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input data-type='email' type="text" className="form-control" name="email" onChange={handleInput} placeholder="Enter email" />

                    {errorLogin.email ? <p className='text-danger'>{errorLogin.email}</p> : ""}

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input data-type='password' type="password" className="form-control" name="password" onChange={handleInput} placeholder="Enter password" />
                    {errorLogin.password ? <p className='text-danger'>{errorLogin.password}</p> : ""}
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
 * 
 * 
 * Truy xuất giá trị của thuộc tính object
 * 
 * object.tenThuocTinh
 * 
 * object["tenThuocTinh"]
 * 
 * key = "tenThuocTinh"
 * 
 * object[key]  => object["email"], object["password"]
 * 
 */
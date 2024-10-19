import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShoesPage = () => {

    
    let [arrShoes, setArrShoes] = useState([])

    let getAPI = () => {

        // GET request for remote image in node.js
        axios({
            method: 'get',
            url: 'https://apistore.cybersoft.edu.vn/api/Product'
        }).then((response) => {
            console.log(response.data.content)

            setArrShoes(response.data.content)

        }).catch((error) => {
            console.log(error)
        })


    }

    // async/await
    let getAPIJS = async () => {
        // try {
        let res = await fetch("https://apistore.cybersoft.edu.vn/api/Product")
        console.log(res) //object
        let data = await res.json()
        console.log(data)
        setArrShoes(data.content)
        // } catch (error) {
        // console.log(error)
        // }

    }


    //onload => call getAPIJS() 



    let renderShoes = () => {
        return arrShoes.map((shoes) => {
            return <div className="col-4" key={`product - ${shoes.id}`} >
                {/* bs5-card-default */}
                <div className="card">
                    <img className="card-img-top" src={shoes.image} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{shoes.name}</h4>
                        <p className="card-text">{shoes.price}</p>
                    </div>
                </div>
            </div>
        })
    }



    /**
     * useEffect => xử lý gọi hàm cho phù hợp với nghiệp vụ
     * ? trước khi render (Chưa load UI)
     * ? render (load UI)
     * ? sau khi render (đã load xong UI)
     */

    // Mounting - Component load lên lần đầu
    //* useEffect(param1, param2)
    //* Chỉ có param1  =>  // sử dụng với các thư viên js cần UI load xong để gắn tính năng hiện ứng (không setState)
    useEffect(() => { 
       //=> chạy function sau khi HTML render xong và khi setState được gọi   
        console.log('Sau khi render useEffect 1') 
        // call thư viện carousel, popup, backtotop, wowjs, aos (hiệu ứng load content)

        //! getAPI() => setState => Updating => render lại UI
     })

     console.log("mounting - trước render") //chạy khi load compoent lần đầu

    //*  Dùng param1 , param2 [] (có các dependency) - mảng rỗng => setState (có render lại UI)
    //Updating - Component render lại UI khi state thay đổi
    useEffect(() => { 
        console.log('Sau khi render useEffect 2') 
        getAPI()
     }, []) // chỉ chạy 1 lần


   
    //Render
    return (
        <>
            <button onClick={getAPIJS} className='btn btn-info'>Get API</button>
            <h2>ShoesPage</h2>
            <div className="row">
                {renderShoes()}
            </div>
        </>
    )





}

export default ShoesPage





/**
 * JS
 */

// let getData = () => { 
//?     //call api
// ?    // hiển thị lên UI
//     content = "<div class='col-4'></div><div class='col-4'></div>"
//     document.querySelector("id").innerHTML = content
//  }

//  getData()

/**
 * JS - Thời điểm gọi hàm (code thực hiện)
 */

// onready (chỉ mới có HTML, chưa load css-js) => chỉ chạy đúng nếu có sẵn file HTML UI đầy đủ
// getData()
    //! JS1 => tạo thẻ carousel
    //! JS2 => thêm tính năng vô thẻ carousel

//onload (load đầy đủ HTML, css-js)
//* JS1 => tạo thẻ carousel
//* JS2 => thêm tính năng vô thẻ carousel

// React  => onload
//! setState => render lại UI
//! => gọi getAPIJS() thêm 1 lần nữa

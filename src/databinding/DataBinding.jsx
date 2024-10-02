import React from 'react'

const DataBinding = () => {
    // Data Binding : giá trị của biến, function (return string, number, boolean hoặc jsx)
    let headingTitle = "Hello CyberSoft"
    let urlImg = "https://i.pravatar.cc/"

    let student = {
        id: "SV001",
        name: "Nguyễn Thị Sinh Viên",
        avatar: "https://i.pravatar.cc/",
    }

    // anfn : arrow function ẩn danh
    let renderCard = () => { 

        return <div className="col-4">
                {/* card-bs */}
                <div className="card">
                    <img src={student.avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{student.name}</h5>
                    </div>
                </div>

            </div>
     }

    return (
        <>
            <h2 id='heading1'>{headingTitle}</h2>
            <img className='w-25' src={"https://i.pravatar.cc/"} alt="" />
            <img className='w-25' src={urlImg} alt="" />
            <div className='row'>
               {renderCard()}
                {renderCard()}
              
            </div>
        </>
    )
}

export default DataBinding


/**
 * DOM
 * 
 * document.querySelector("#heading1").innerHTML = headingTitle
 * 
 * React - interpolation {headingTitle}
 * 
 * 
 * 
 * Function 
 * let myFunction = function(){
 *   
 * }
 * 
 * Load trang: 
 * myFunction() // chạy ngay khi load web
 * 
 * Khi click:
 * document.querySelector("#btn").onclick = myFunction
 * 
 */
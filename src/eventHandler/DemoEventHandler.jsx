import React from 'react'



const DemoEventHandler = () => {


    let clickLike = () => {
        console.log("Like")

    }

    let clickLikeMe = (name) => {
        console.log(`Click ${name}`)

    }
    let changeBackground = (e) => { 
        //event - sự kiện có sẵn của thẻ HTML (JSX) 
        // e, evt, event
        //Lấy thẻ đang được thao tác
        console.log(e.target) // toàn bộ thẻ đang được click
        
        e.target.style.backgroundColor = "blue"
     }

    return (
        <>
            <h2>Event Handler</h2>
            <button type="button" className="btn btn-danger" onClick={clickLike} >Like</button>
            <button type="button" className="btn btn-danger" onClick={() => {
                // sử dụng hàm ẩn danh khi cần truyền tham số
                clickLikeMe("CyberSoft")
            }}>Like Name</button>
            <button type="button" className="btn btn-danger" onClick={changeBackground}>Change</button>

        </>
    )
}

export default DemoEventHandler

/**
 * Event JS
 * onclick
 * 
 * myFunction
 * 
 * document.getElementById("btn").onclick = myFunction
 *  document.getElementById("btn").onclick = function(){
 * 
 * }
 * 
 * <button onclick=""></button>
 * 
 * 
 */
import React, { useState } from 'react'

const ChangeAvatar = () => {
    /**
     * B1: Xây dựng UI
     * B2: Xác định state: giá trị nào cần lưu, kiểu dữ liệu
     *  + giá trị : url của hình (id user)
     *  + number => random số id ngẫu nhiên
     * B3: Binding state lên UI
     * B4: Xử lý sự kiện đổi state (setState)
     */

    // let userID = 0
    let [userID, setUserID] = useState(0)

    //Thời điểm đổi state => đổi khi click button like
    let handleLike = () => {
        //Đổi giá trị của state & render lại UI => sử dụng setState
        //random từ 0 -> 69
        let newUserID = Math.floor(Math.random() * 70)
        console.log(newUserID)

        setUserID(newUserID)
    }


    return (
        <div className='row'>
            <div className="col-4">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={`https://i.pravatar.cc/?u=${userID}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Lisa</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <button onClick={handleLike} type="button" className="btn btn-outline-danger"><i className="fa-solid fa-heart" /> Like</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChangeAvatar
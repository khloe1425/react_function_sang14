import React from 'react'

const DanhSachPhone = (props) => {
    let { renderPhoneList } = props

    return (
        <>
            <h1>Danh sách điện thoại</h1>
            <div className='row'>
                {renderPhoneList()}
            </div>
        </>

    )
}

export default DanhSachPhone
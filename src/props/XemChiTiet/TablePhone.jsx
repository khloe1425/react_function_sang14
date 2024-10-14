import React from 'react'

const TablePhone = (props) => {
    let { phoneObj } = props
    
    return (
        <div className="row py-5">
            <div className="col-4">
                <h2>{phoneObj.tenSP}</h2>
                <img className='w-100' src={phoneObj.hinhAnh} alt="" />
            </div>
            <div className="col-8">
                <h2>Thông số kỹ thuật</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Thông số</th>
                            <th scope="col">Nội dung</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Màn hình</th>
                            <td>{phoneObj.manHinh}</td>
                        </tr>
                        <tr>
                            <th scope="row">HĐH</th>
                            <td>{phoneObj.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <th scope="row">Camera trước</th>
                            <td>{phoneObj.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ram</th>
                            <td>{phoneObj.ram}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default TablePhone
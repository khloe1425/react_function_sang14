import React from 'react'

const Cart = (props) => {
   
    let { arrCart } = props
   
    let renderCart = () => {
        return arrCart.map((productCart, index) => {
            return <tr key={`cart-${productCart.maSP}`}>
                <td>{productCart.maSP}</td>
                <td>
                    <img src={productCart.hinhAnh} style={{ width: "50px" }} alt="" />
                </td>
                <td>{productCart.tenSP}</td>
                <td>
                    <button onClick={() => { 

                        props.changeSL(productCart.maSP, 1)

                     }} className='btn btn-success'>+</button>
                    <span> {productCart.soLuong} </span>
                    <button onClick={() => {

                        props.changeSL(productCart.maSP, -1)

                    }} className='btn btn-danger'>-</button>
                </td>
                <td>
                    {productCart.giaBan.toLocaleString()}
                </td>
                <td>{(productCart.giaBan * productCart.soLuong).toLocaleString()}</td>
                <td>
                    <button className='btn btn-danger'>Xóa</button>
                </td>
            </tr>

        })
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Mã</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Đơn giá</th>
                                    <th scope="col">Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCart()}
                            </tbody>
                        </table>





                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
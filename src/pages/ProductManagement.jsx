import React from 'react'
import { NavLink } from 'react-router-dom'



/**
 * UI: 
 * + button new product
 * + Thanh search
 * + Table hiển thị danh sách sản phẩm
 * 
 * 1/ Hiển thị danh sách sp (table)
 * 2/ Tìm kiếm sp
 * 3/ Thêm sp (về nhà làm)
 * 4/ Cập nhật sp 
 */
const ProductManagement = () => {
  return (
    <>
      <h2>ProductManagement</h2>
      <NavLink to={"/admin/add-product"} className='btn btn-warning'>New Product</NavLink>
      <form style={{width:"30%"}} className='mt-3' >
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter keyword" />
          <button type='submit' className="input-group-text" id="search">Search</button>
        </div>

      </form>
      <div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th scope="col">NAME</th>
                <th scope="col">IMG</th>
                <th scope="col">PRICE</th>
                <th scope="col">TYPE</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>Product 3</td>
                <td>
                  <img src="product3.jpg" width={50} height={50} className="img-thumbnail" />
                </td>
                <td>4999</td>
                <td>A</td>
                <td>
                  <a href="#" className="text-decoration-none text-danger">Edit</a> |
                  <a href="#" className="text-decoration-none text-danger">Delete</a> |
                  <a href="#" className="text-decoration-none text-danger">View detail</a>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>Product 2</td>
                <td>
                  <img src="product2.jpg" width={50} height={50} className="img-thumbnail" />
                </td>
                <td>3999</td>
                <td>B</td>
                <td>
                  <a href="#" className="text-decoration-none text-danger">Edit</a> |
                  <a href="#" className="text-decoration-none text-danger">Delete</a> |
                  <a href="#" className="text-decoration-none text-danger">View detail</a>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>Product 1</td>
                <td>
                  <img src="product1.jpg" width={50} height={50} className="img-thumbnail" />
                </td>
                <td>2999</td>
                <td>A</td>
                <td>
                  <a href="#" className="text-decoration-none text-danger">Edit</a> |
                  <a href="#" className="text-decoration-none text-danger">Delete</a> |
                  <a href="#" className="text-decoration-none text-danger">View detail</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>Showing 1 to 3 of 3 results</div>
          <div className="d-flex align-items-center">
            <span className="me-2">Per page:</span>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>


    </>
  )
}

export default ProductManagement
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
import axios from 'axios'
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
  //Call API để get product list khi load
  let [arrProduct, setArrProduct] = useState([])

  let location = useLocation()
  console.log(location)


  let [search, setSearch] = useSearchParams()
  //B3: lấy kw từ url
  let kw = search.get("productName")

  // B1: lấy dữ liệu từ form
  let handleInput = (e) => {
    console.log(e.target.value)
    //B2: đưa keyword tìm kiếm lên url
    setSearch({
      productName: e.target.value
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    //*C1: Gọi API sau khi submit => không bị call API nhiều lần
    getAPISearch() // chạy khi submit => load sp cần tìm
  }



  let getAPI = () => {
    // GET request for remote image in node.js
    axios({
      method: 'get',
      url: 'https://apitraining.cybersoft.edu.vn/api/ProductApi/getall'
    }).then((response) => {
      console.log(response.data.content)

      setArrProduct(response.data.content)

    }).catch((error) => {
      console.log(error)
    })
  }

  let getAPISearch = async () => {
    let url = ''
    if (kw) {
      // kw có => đang muốn search => sp cần tìm
      console.log("Load sp tìm")
      url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall/?keyword=${kw}`
    } else {
      // load trang lần đầu => tất cả sp
      console.log("Load tất cả")
      url = 'https://apitraining.cybersoft.edu.vn/api/ProductApi/getall'

    }
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    // setArrProduct(data.content)
    setArrProduct(data)
  }


  //* C2 Gọi API khi dữ liệu keyword đổi => gọi APi nhiều lần => ảnh hưởng server/ gây lag ở FE (render lại UI nhiều lần)
  // useEffect(() => {
  //   getAPISearch()
  // }, [kw]) // chạy lại hàm khi kw đổi

  //* C3: gõ search => hiển thi sp tìm 
  // Xử lý code thuần ở FE => duyệt arrProduct bằng vòng lặp (for, map) =>  so sánh và tự tìm sp theo keyword (dùng thuật toán tìm kiếm)

  useEffect(() => {
    getAPISearch()
  }, []) // chạy 1 lần khi load => load tất cả


  return (
    <>
      <h2>ProductManagement</h2>
      <NavLink to={"/admin/add-product"} className='btn btn-warning'>New Product</NavLink>
      <NavLink to={"/admin/product-form"} className='btn btn-warning'>New Product Form</NavLink>
      <form onSubmit={handleSubmit} style={{ width: "30%" }} className='mt-3' >
        <div className="input-group mb-3">
          <input onChange={handleInput} type="text" className="form-control" placeholder="Enter product name" />
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
              {
                arrProduct?.map((product) => {
                  // let arrCate = JSON.parse(product.categories)
                  return <tr key={`pro-${product.id}`}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <img src={product.img} width={50} height={50} className="img-thumbnail" />
                    </td>
                    <td>{product.price}</td>
                    {/* <td>{arrCate[0].category}</td> */}
                    <td>{product.type}</td>
                    <td>
                      <NavLink to={`/admin/edit-product/${product.id}`} className="text-decoration-none text-danger">Edit</NavLink> |
                      <NavLink to={`/admin/product-form/${product.id}`} className="text-decoration-none text-danger">Edit Form</NavLink> |

                      <button onClick={async () => {
                        console.log(product.id)
                        if (window.confirm("Bạn có chắc muốn xóa?")) {
                          let res = await axios.delete(`https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${product.id}`)
                          alert("Xóa thành công")
                          getAPISearch()
                        }

                      }} className="text-decoration-none text-danger">Delete</button> |
                      <a href="#" className="text-decoration-none text-danger">View detail</a>
                    </td>
                  </tr>
                })
              }


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
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    // B1: đưa keyword tìm kiếm lên url
    // B2: lấy keyword từ url => đưa xuống API
    // B3: Hiển thị dữ liệu lên UI

    let [keyword, setKeyword] = useState("")
    console.log(keyword)

    //đưa keyword lên url, hoạt động gần giống state
    let [arrSearch, setArrSearch] = useState([]) // lưu mảng sản phẩm tìm kiếm 
    let [search, setSearchKeyword] = useSearchParams()
    let valueKeyword = search.get("k")

    let getProductByKeyword = async () => {
        if (valueKeyword) {
            //Gọi API
            let res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${valueKeyword}`)
            let data = await res.json()
            console.log(data.content)
            setArrSearch(data.content)
        }
    }

    useEffect(() => {
        getProductByKeyword()
    }, [valueKeyword]) // nếu valueKeyword đổi giá trị thì call lại API



    let handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        //Đưa keyword lên url

        setSearchKeyword({
            k: keyword,  //tên param sẽ đặt ở url (k, q, keyword)
            // sortBy:"ctime"
        })

    }

    return (
        <div>
            <h2>Search page</h2>
            {/* onSubmit có thể dùng với Enter */}
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input onInput={(e) => {
                        setKeyword(e.target.value)
                    }} type="text" className="form-control" placeholder="Enter keyword" />
                    <button type='submit' className="input-group-text" id="search">Search</button>
                </div>

            </form>
            <div className="row">
                {arrSearch?.map((product) => {
                    return <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text">{product.price}</p>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Search
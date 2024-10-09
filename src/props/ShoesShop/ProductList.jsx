import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {



    // Duyệt mảng
    let renderProductList = () => {
        //map (render with map)
        //anfn
        // arrCol4 = [ jsx <div>, jsx <div>, jsx <div>]
        
        //Return ngoài giúp binding dữ liệu
        return props.arrProduct.map((product, index) => {
            //đối tượng jsx col-4
            //return map chỉ dừng khi hết mảng và trả về 1 mảng mới
            //TODO: Product item component
            return <div className="col-4" key={`product-${product.id}`}>
                <ProductItem product={product} />
            </div>

        })
        //trả về mảng các đối tương jsx col-4 => để binding lên UI
        // return arrCol4

    }


    return (
        <div className="row">
            {renderProductList()}
        </div>
    )
}

export default ProductList
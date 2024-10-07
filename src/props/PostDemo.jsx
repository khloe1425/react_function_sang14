import React from 'react'

const PostDemo = (props) => {

    // Destructuring (bóc tách thuộc tính đối tượng)
    // let contentObject = props.contentObject
    let {contentObject} = props
    
//    Optional chaining: toán tử ? dành cho object (kiểm tra có thuộc tính của object hay không, nếu có thì load data, không có thì bỏ)

  return (
      <div className="card">
          <div className="card-body">
              {/* <h5 className="card-title">{props.contentObject.title}</h5> */}
              <h5 className="card-title">{contentObject?.title}</h5>
              <p className="card-text">{contentObject?.desc}</p>

          </div>
      </div>
  )
}

export default PostDemo
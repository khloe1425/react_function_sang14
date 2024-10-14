import React from 'react'

const Phone = (props) => {

 let {tenSP, hinhAnh, giaBan } = props.phone

  return (
      <div className="card">
          <img className="card-img-top" src={hinhAnh} alt="Title" />
          <div className="card-body">
              <h4 className="card-title">{tenSP}</h4>
              <p className="card-text">{giaBan.toLocaleString()}</p>
              <button onClick={() => { 
                  props.showDetail(props.phone)
               }} className="btn btn-success">Xem chi tiết</button>
          </div>
      </div>
  )
}

export default Phone
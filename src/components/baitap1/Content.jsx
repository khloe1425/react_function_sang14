import React from 'react'
import Card from './Card'

const Content = () => {
  //1 row => 12 col
  // => tạo 3 cột (card) => 12/3 = 4
  return (
    <div className='row'>
      <div className="col-4">
        <Card />
      </div>
      <div className="col-4">
        <Card />
      </div>
      <div className="col-4">
        <Card />
      </div>

    </div>
  )
}

export default Content
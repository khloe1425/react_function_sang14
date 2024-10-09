import React from 'react'

const DemoPropChildrend = (props) => {



  return (
    <div>
          <h1>DemoPropChildrend</h1>
        {/* UI của component con */}
          {props.children}
    </div>
  )
}

export default DemoPropChildrend
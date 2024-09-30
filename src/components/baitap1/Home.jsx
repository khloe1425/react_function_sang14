import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='container-fluid' >
        <div className="row">
              <div className="col-12 bg-success py-5">
                <Header/>
            </div>
              <div className="col-4 bg-warning py-5">
                <Navigation/>
            </div>
              <div className="col-8 bg-info py-5">
                <Content/>
            </div>
              <div className="col-12 bg-danger py-5">
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Home
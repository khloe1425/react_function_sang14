import React from 'react'
import HeaderRoute from '../components/HeaderRoute'
import { Outlet } from 'react-router-dom'

const HomeTemplate = () => {

    // Outlet: load các component khác nhau vào nội dung của template
    
    return (
        <>
            <HeaderRoute />
            <div className='container'>
                <Outlet />
            </div>
            <footer className='mt-5 bg-black text-white' style={{ height: "200px" }}>
                Footer
            </footer>
        </>
    )

}

export default HomeTemplate
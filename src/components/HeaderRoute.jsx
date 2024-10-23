import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderRoute = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a href="/" className="nav-link active" >Home</a> */}
                            <NavLink to="/" className={(props) =>  props.isActive ? "nav-link text-danger" :"nav-link text-secondary" } >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={(props) => props.isActive ? "nav-link text-danger" : "nav-link text-secondary"}  >Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user/login" className={(props) => props.isActive ? "nav-link text-danger" : "nav-link text-secondary"}  >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user/register" className="nav-link" style={(props) => props.isActive ? {color:"pink"} : {color:"black"}}  >Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default HeaderRoute


/**
 * Render client side, server side
 * client side: load UI ở phía user không lấy từ Server (nơi lưu code của web)
 * server side: load lại toàn bộ trang 
 */
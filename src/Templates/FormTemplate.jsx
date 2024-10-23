import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const FormTemplate = () => {
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-6">
                        <img src="https://picsum.photos/500/500" alt="" />
                    </div>
                    <div className="col-6">
                        <Outlet />

                        <NavLink to="/" className="nav-link">Back to home</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormTemplate
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminTemplate = () => {
    return (
        <>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>
                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
                            <svg className="bi"><use xlinkHref="#search" /></svg>
                        </button>
                    </li>
                    <li className="nav-item text-nowrap">
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <svg className="bi"><use xlinkHref="#list" /></svg>
                        </button>
                    </li>
                </ul>
                <div id="navbarSearch" className="navbar-search w-100 collapse">
                    <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/product" className="nav-link" >Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/customer"  className="nav-link" >Customer</NavLink>
                            </li>
                           
                        </ul>

                    </div>
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminTemplate
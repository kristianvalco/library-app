import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/sosthe-logo.svg'

// CSS
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <nav className="sidebar-content">
            <div className="sidebar-wrapper">
                <div className="simplebar-mask">
                    <div className="simplebar-offset">
                        <div className="simplebar-content-wrapper">
                            <div className="simplebar-content">
                                <Link to="/"><img src={logo} alt="" className="sidebarLogo" /></Link>
                                <ul className="side-navbar">
                                    <li className="side-navbar-item"><NavLink to="/" exact>Home</NavLink></li>
                                    <li className="side-navbar-item"><NavLink to="/dwdw">Test</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar

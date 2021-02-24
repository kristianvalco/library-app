import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/sosthe-logo.svg'

// CSS
import './Sidebar.scss'

const Sidebar = (props) => {

    const { handle } = props
 
    return (
        <nav id="sidebar" className={`${handle ? "" : "active"}`}>
            <div className="sidebar-header">
                <Link to="/"><img src={logo} alt="" className="sidebarLogo" /></Link>
            </div>

            <ul className="side-navbar">
                <li className="side-navbar-item">
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li className="side-navbar-item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar

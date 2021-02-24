import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/sosthe-logo.svg'

// CSS
import './Sidebar.scss'

const Sidebar = (props) => {

    // sidebar active class
    const { handle } = props
 
    return (
        <nav id="sidebar" className={`${handle ? "" : "active"}`}>
            <div className="sidebar-header">
                <Link to="/" className="sidebarLogo"><img src={logo} alt="" /></Link>
            </div>

            <ul className="side-navbar">
                <li className="side-navbar-item">
                    <NavLink to="/" exact><i className="fa fa-home" />Home</NavLink>
                </li>
                <li className="side-navbar-item">
                    <NavLink to="/contact"><i className="fa fa-phone" />Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar

import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/sosthe-logo.svg'
import plusIcon from "../../assets/img/icons/plus.svg";

// CSS
import './Sidebar.scss'

const Sidebar = (props) => {

    // sidebar active class
    const { handle } = props
 
    return (
        <nav id="sidebar" className={`${handle ? "" : "active"}`}>
            <div className="sidebar-header">
                <Link to="/" className="sidebarLogo"><img src={logo} /></Link>
            </div>

            <button className="btn btn-primary addNew shadow-none">Pridať záznam <img src={plusIcon} /></button>

            <ul className="side-navbar">
                <li className="side-navbar-item">
                    <NavLink to="/" exact>Domov</NavLink>
                </li>
                <li className="side-navbar-item">
                    <NavLink to="/contact">Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar

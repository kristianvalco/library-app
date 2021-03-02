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
            <div className="addNew d-flex justify-content-center">
                <Link to="/addnew" type="button" className="btn btn-primary shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    Pridať záznam
                </Link>
            </div>
            <ul className="side-navbar">
                <li className="side-navbar-item">
                    <NavLink to="/" exact>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                        </svg>
                        Domov
                    </NavLink>
                </li>
                <li className="side-navbar-item">
                    <NavLink to="/books">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                        Knihy
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar

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
            <div className="addNew">
                <Link to="/newrecord" type="button" className="btn btn-primary shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 97"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="plusIcon" d="M89.54,41H56V7.46A7.46,7.46,0,0,0,41,7.46V41H7.46A7.46,7.46,0,0,0,7.46,56H41V89.54a7.46,7.46,0,0,0,14.92,0V56H89.54a7.46,7.46,0,0,0,0-14.92Z"/></g></g></svg>
                    Pridať záznam
                </Link>
            </div>
            <ul className="side-navbar">
                <li className="side-navbar-item">
                    <NavLink to="/" exact>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 229.13"><path d="M115,2.71a11.8,11.8,0,0,0-15.06,0L7.53,83.55C3.39,87.17,0,94.63,0,100.13v119a10,10,0,0,0,10,10H69a10,10,0,0,0,10-10v-71a10,10,0,0,1,10-10h37a10,10,0,0,1,10,10v71a10,10,0,0,0,10,10h59a10,10,0,0,0,10-10v-119c0-5.5-3.39-13-7.53-16.58Z" transform="translate(0 0)"/></svg>
                        Domov
                    </NavLink>
                </li>
                <li className="side-navbar-item">
                    <NavLink to="/books">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 229.13"><path d="M115,2.71a11.8,11.8,0,0,0-15.06,0L7.53,83.55C3.39,87.17,0,94.63,0,100.13v119a10,10,0,0,0,10,10H69a10,10,0,0,0,10-10v-71a10,10,0,0,1,10-10h37a10,10,0,0,1,10,10v71a10,10,0,0,0,10,10h59a10,10,0,0,0,10-10v-119c0-5.5-3.39-13-7.53-16.58Z" transform="translate(0 0)"/></svg>
                        Knihy
                    </NavLink>
                </li>
                <li className="side-navbar-item">
                    <NavLink to="/contact">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 229.13"><path d="M115,2.71a11.8,11.8,0,0,0-15.06,0L7.53,83.55C3.39,87.17,0,94.63,0,100.13v119a10,10,0,0,0,10,10H69a10,10,0,0,0,10-10v-71a10,10,0,0,1,10-10h37a10,10,0,0,1,10,10v71a10,10,0,0,0,10,10h59a10,10,0,0,0,10-10v-119c0-5.5-3.39-13-7.53-16.58Z" transform="translate(0 0)"/></svg>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar

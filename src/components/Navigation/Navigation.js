import React from 'react'
import app from '../../base';

import avatar from '../../assets/img/avatar.jpg'

// CSS
import './Navigation.scss'

const Navigation = (props) => {

    // close sidebar
    const { handle } = props

    return (
        <nav className="navbar navbar-expand">
            <button onClick={handle} type="button" className="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="menuIcon" d="M0,3V0H20V3ZM0,9V6H16V9Zm0,6V12H20v3Z" /></g></g></svg>
            </button>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle avatar" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={avatar} alt="" />Kristián Valčo
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <button className="dropdown-item" onClick={() => app.auth().signOut()}>Odhlásiť sa</button>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* <button onClick={() => app.auth().signOut()} type="button" className="btn btn-primary shadow-none" >Sign out</button> */}
        </nav>
    )
}

export default Navigation

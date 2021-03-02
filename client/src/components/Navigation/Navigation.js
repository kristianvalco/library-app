import React from 'react'
import app from '../../base';
import firebase from 'firebase'
import { NavLink } from 'react-router-dom'

// CSS
import './Navigation.scss'

const Navigation = (props) => {

    // close sidebar
    const { handle } = props
    
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    
    if (user != null) {
        name = user.displayName; // eslint-disable-line no-unused-vars
        email = user.email; // eslint-disable-line no-unused-vars
        photoUrl = user.photoURL; // eslint-disable-line no-unused-vars
        emailVerified = user.emailVerified; // eslint-disable-line no-unused-vars
        uid = user.uid; // eslint-disable-line no-unused-vars
    };

    // show name or email
    let showInfo;

    if (user.displayName == null) {
      showInfo = user.email;
    } else {
      showInfo = user.displayName;
    }

    return (
        <nav className="navbar navbar-expand">
            <button onClick={handle} type="button" className="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle avatar" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        {showInfo}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <NavLink className="dropdown-item" to="/settings">Nastavenia</NavLink>
                        </li>
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

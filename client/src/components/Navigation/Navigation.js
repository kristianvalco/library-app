import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

// CSS
import './Navigation.scss'

const Navigation = (props) => {
    // close sidebar
    const { handle } = props
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        
        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 30000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const userRole = JSON.parse(localStorage.getItem('profile'))?.result?.role;

    return (
        <nav className="navbar navbar-expand">
            <button onClick={handle} type="button" className="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <ul className="navbar-nav">
                {user ? (
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle avatar" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.result.name}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NavLink className="dropdown-item" to="/settings">Nastavenia</NavLink>
                            </li>
                            {(userRole === 'admin') && (    
                                <li>
                                    <NavLink className="dropdown-item" to="/register">Registrovať</NavLink>
                                </li>
                            )}
                            <li>
                                <button className="dropdown-item" onClick={logout}>Odhlásiť sa</button>
                            </li>
                            <li>
                                {/* <button className="dropdown-item" onClick={() => app.auth().signOut()}>Odhlásiť sa</button> */}
                            </li>
                        </ul>
                    </li>
                ) : (
                    <li className="nav-item ">
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation

import React from 'react'
import menuIcon from '../../assets/img/icons/menu.svg'
import app from '../../base';

// CSS
import './Navigation.scss'

const Navigation = (props) => {

    // close sidebar
    const { handle } = props

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button onClick={handle} type="button" className="close-btn"><img src={menuIcon} alt="" /></button>
                <button onClick={() => app.auth().signOut()} type="button" className="btn btn-primary me-auto" >Sign out</button>
            </div>
        </nav>
    )
}

export default Navigation

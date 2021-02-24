import React from 'react'

import './Navigation.scss'

const Navigation = (props) => {

    // close sidebar
    const { handle } = props

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button onClick={handle} type="button" className="close-btn"><i className="fas fa-bars"></i></button>
            </div>
        </nav>
    )
}

export default Navigation

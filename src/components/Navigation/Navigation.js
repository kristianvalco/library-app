import React from 'react'

import './Navigation.scss'

const Navigation = (props) => {

    const { handle } = props

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button onClick={handle} type="button" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation

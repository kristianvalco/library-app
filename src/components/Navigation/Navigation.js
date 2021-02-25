import React from 'react'
import menuIcon from '../../assets/img/icons/menu.svg'

// CSS
import './Navigation.scss'

const Navigation = (props) => {

    // close sidebar
    const { handle } = props

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button onClick={handle} type="button" className="close-btn"><img src={menuIcon} /></button>
            </div>
        </nav>
    )
}

export default Navigation

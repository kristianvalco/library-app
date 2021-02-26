// eslint-disable-next-line
import React, { useState } from 'react'

// components
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'

const Home = () => {

    // is sidebar active? false
    const [isActive, setActive] = useState("false");

    // close sidebar
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="wrapper">
            <Sidebar handle={isActive} />
            <div id="content" className={`${isActive ? "" : "active"}`}>
                <Navigation handle={handleToggle} />
                <div className="main">
                    <h1>Hello</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
// eslint-disable-next-line
import React, { useState } from 'react'

// components
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'
import { Switch, Route } from 'react-router-dom';

import Contact from '../views/Contact'
import Dashboard from '../views/Dashboard'


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
                    <Switch>
                        <Route exact path="/"><Dashboard /></Route>
                        <Route exact path="/contact"><Contact /></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Home
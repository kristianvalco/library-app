// eslint-disable-next-line
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'

// views
import Dashboard from '../views/Dashboard'
import BooksTable from '../views/BooksTable'
import Settings from '../views/Settings'

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
                        <Route exact path="/books"><BooksTable /></Route>
                        <Route exact path="/settings"><Settings /></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Home
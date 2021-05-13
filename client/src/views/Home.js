// eslint-disable-next-line
import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// components
import Sidebar from '../components/Sidebar/Sidebar'
import Navigation from '../components/Navigation/Navigation'

// views
import Dashboard from './Dashboard'
import BooksTable from './BooksTable'
import Settings from './Settings'

import Login from "../components/Login/Login"


const Home = ({ user, userRole }) => {

    // is sidebar active? false
    const [isActive, setActive] = useState("false");

    // close sidebar
    const handleToggle = () => {
        setActive(!isActive);
    };

    if (!user?.result?.name) {
        return (
            <Login userRole={userRole} />
        )
    }

    return (
        <div className="wrapper">
            <Sidebar handle={isActive} />
            <div id="content" className={`${isActive ? "" : "active"}`}>
                <Navigation handle={handleToggle} />
                <div className="main">
                    <Switch>
                        <Route exact path="/">
                            {/* {!user?.result?.name ? <Redirect to="/" /> : <Dashboard />} */}
                            <Dashboard />
                        </Route>
                        <Route exact path="/books">
                            {/* {!user?.result?.name ? <Redirect to="/" /> : <BooksTable user={user} userRole={userRole} />} */}
                            <BooksTable user={user} userRole={userRole} />
                        </Route>
                        <Route exact path="/settings">
                            {/* {!user?.result?.name ? <Redirect to="/" /> : <Settings />} */}
                            <Settings />
                        </Route>
                        <Route exact path="/register">
                            {/* {!user?.result?.name ? <Redirect to="/" /> : <Settings />} */}
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Home
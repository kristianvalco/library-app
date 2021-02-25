import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Sidebar from '../components/Sidebar/Sidebar'
import Navigation from '../components/Navigation/Navigation'

// views
import Dashboard from "../views/Dashboard";
import SignUp from "../views/SignUp";
import Contact from "../views/Contact";

const Home = () => {

    // is sidebar active? false
    const [isActive, setActive] = useState("false");

    // close sidebar
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="wrapper">
            <div>
                <Sidebar handle={isActive} />
                <div id="content" className={`${isActive ? "" : "active"}`}>
                    <Navigation handle={handleToggle} />
                    <div className="main">
                        <Switch>
                            <Route path="/" exact><Dashboard /></Route>
                            <Route path="/signup" exact><SignUp /></Route>
                            <Route path="/contact"><Contact /></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
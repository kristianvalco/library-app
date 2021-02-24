import { useState } from 'react';
import { Switch, Route } from "react-router-dom";

// CSS
import './assets/css/App.scss';

// components
import Sidebar from './components/Sidebar/Sidebar'
import Navigation from './components/Navigation/Navigation'

// views
import Home from "./views/Home";
import Contact from './views/Contact'

function App() {

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
                        <Route path="/" exact><Home /></Route>
                        <Route path="/contact"><Contact /></Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;

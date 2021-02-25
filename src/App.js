import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import './assets/css/App.scss'

// components
import Home from "./components/Home"
import Login from "./components/Login"
import Contact from "./views/Contact"

import AuthProvider from "./Auth"
import PrivateRoute from "./PrivateRoute"

// components
import Sidebar from './components/Sidebar/Sidebar'
import Navigation from './components/Navigation/Navigation'

function App() {

     // is sidebar active? false
     const [isActive, setActive] = useState("false");

     // close sidebar
     const handleToggle = () => {
         setActive(!isActive);
     };

    return (
        <Router>
            <AuthProvider>
                <div className="wrapper">
                    <Sidebar handle={isActive} />
                    <div id="content" className={`${isActive ? "" : "active"}`}>
                        <Navigation handle={handleToggle} />
                        <div className="main">
                            <Switch>
                                <Route exact path="/login" component={Login}></Route>
                                <PrivateRoute exact path="/" component={Home}></PrivateRoute>
                                <PrivateRoute exact path="/contact" component={Contact}></PrivateRoute>
                            </Switch>
                        </div>
                    </div>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;

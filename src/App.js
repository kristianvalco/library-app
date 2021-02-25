import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import './assets/css/App.scss';

// components
import Sidebar from './components/Sidebar/Sidebar'
import Navigation from './components/Navigation/Navigation'

// views
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Contact from "./views/Contact";

import AuthProvider from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {

    // // is sidebar active? false
    // const [isActive, setActive] = useState("false");

    // // close sidebar
    // const handleToggle = () => {
    //     setActive(!isActive);
    // };

    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute path="/" exact component={Home} />
                    <Route path="/login" exact><Login /></Route>
                    <Route path="/signup" exact><SignUp /></Route>
                    <Route path="/home"><Home /></Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;

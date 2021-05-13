import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import './assets/css/App.scss'

// components
import Home from "./components/Home"
import Login from "./components/Login/Login"
import PrivateRoute from "./PrivateRoute"

function App() {
    return (
        <Router>
            <Route exact path="/login" component={Login} />
            {/* <Route path="/" component={Home} /> */}
            <PrivateRoute path="/" component={Home} />
        </Router>
    );
}

export default App;
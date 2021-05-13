import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import './assets/css/App.scss'

// components
import Home from "./components/Home"
import Login from "./components/Login/Login"

function App() {
    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Home} />
        </Router>
    );
}

export default App;
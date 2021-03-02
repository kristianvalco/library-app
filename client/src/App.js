import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import './assets/css/App.scss'

// components
import Home from "./components/Home"
import Login from "./components/Login/Login"
import AuthProvider from "./Auth"
import PrivateRoute from "./PrivateRoute"

function App() {
    return (
        <Router>
            <AuthProvider>
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/" component={Home} />
            </AuthProvider>
        </Router>
    );
}

export default App;
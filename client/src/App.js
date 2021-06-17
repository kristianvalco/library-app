import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import './assets/css/App.scss'

// components
import Home from "./views/Home"

function App() {
    const user = JSON.parse(localStorage.getItem('profile'));
    const userRole = JSON.parse(localStorage.getItem('profile'))?.result?.role;

    return (
        <Router>
            <Route path="/">
                <Home user={user} userRole={userRole} />
            </Route>
        </Router>
    );
}

export default App;
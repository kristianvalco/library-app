import { Switch, Route } from "react-router-dom";

// CSS
import './assets/css/App.scss';

// components
import Sidebar from './components/Sidebar/Sidebar'
import Navigation from './components/Navigation/Navigation'

// views
import Home from "./views/Home";

function App() {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main">
                <Navigation />
                <Switch>
                    <Route path="/"><Home /></Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;

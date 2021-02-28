import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'animate.css'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// CSS
import './assets/css/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
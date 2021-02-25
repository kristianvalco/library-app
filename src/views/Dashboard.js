import React from 'react'
import app from '../base';

const Dashboard = () => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    )
}

export default Dashboard

import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <Route 
            {...rest}
            render={routeProps =>
                !!user ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
    )
}

export default PrivateRoute

import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from "react-router"
import app from '../../base'
import { AuthContext } from '../../Auth'
import logo from '../../assets/img/sosthe-logo.svg'

// CSS
import './Login.scss'

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    let myCurrentDate = new Date()
    let year = myCurrentDate.getFullYear();

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <form onSubmit={handleLogin}>
                            <img src={logo} alt="" className="d-flex justify-content-center" />
                            <input type="email" name="email" className="form-control email shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            <input type="password" name="password" className="form-control password shadow-none" id="exampleInputPassword1" placeholder="Password" />
                            <button type="submit" className="btn btn-primary shadow-none">Prihlásiť sa</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="fixed-bottom text-center mb-4 copyright">&copy; { year } <a href="http://sosthe.sk" target="_blank" rel="noreferrer">Stredná odborná škola technická Humenné.</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);

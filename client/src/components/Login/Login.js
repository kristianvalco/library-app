import React from 'react'
import { withRouter } from "react-router"
import logo from '../../assets/img/sosthe-logo.svg'

// CSS
import './Login.scss'

const Login = () => {

    let myCurrentDate = new Date()
    let year = myCurrentDate.getFullYear();

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <form onSubmit=''>
                            <img src={logo} alt="" className="d-flex justify-content-center" />
                            <input type="email" name="email" className="form-control email shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            <input type="password" name="password" className="form-control password shadow-none" id="exampleInputPassword1" placeholder="Heslo" />
                            <button type="submit" className="btn btn-primary d-flex justify-content-center shadow-none">Prihlásiť sa</button>
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

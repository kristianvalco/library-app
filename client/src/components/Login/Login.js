import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom' 
import logo from '../../assets/img/sosthe-logo.svg'

import Input from './Input'
import { register, login } from '../../actions/login'

// CSS
import './Login.scss'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Login = () => {
    let myCurrentDate = new Date()
    let year = myCurrentDate.getFullYear();

    const [showPassword, setShowPassword] = useState(false); 
    const [isRegistered, setIsRegistered] = useState(false); 
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isRegistered) {
            dispatch(register(formData, history))
        } else {
            dispatch(login(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // const switchMode = () => { 
    //     setIsRegistered((prevIsRegistered) => !prevIsRegistered);
    //     setShowPassword(false);
    // }

    const userRole = JSON.parse(localStorage.getItem('profile'))?.result?.role;
        
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <form onSubmit={handleSubmit}>
                            <Link to="/dashboard" className="loginLogo">
                                <img src={logo} alt="" className="d-flex justify-content-center" />
                            </Link>
                            <h3 className="text-center">{ (isRegistered || userRole === 'admin') ? 'Zaregistrovať sa' : 'Prihlásiť sa' }</h3>
                            { (isRegistered || userRole === 'admin') && (
                                <>
                                    <Input name="firstName" type="name" placeholder="Meno" handleChange={handleChange} autoFocus className="email" />
                                    <Input name="lastName" type="name" placeholder="Priezvisko" handleChange={handleChange} autoFocus className="email" />
                                </>
                            )}
                            <Input name="email" type="email" placeholder="Email" handleChange={handleChange} autoFocus className="email" />
                            <Input name="password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} placeholder="Heslo" handleChange={handleChange} autoFocus className="password" />
                            { (isRegistered || userRole === 'admin') && 
                                <Input name="confirmPassword" type="password" placeholder="Zopakujte heslo" handleChange={handleChange} autoFocus className="password" />
                            }
                            <button type="submit" className="btn btn-primary d-flex justify-content-center shadow-none">
                                { (isRegistered || userRole === 'admin') ? 'Zaregistrovať sa' : 'Prihlásiť sa' }
                            </button>
                            {/* {(userRole === 'admin') && (    
                                <button onClick={switchMode} type="button" className="btn btn-text mt-3 d-flex justify-content-center shadow-none">
                                    { isRegistered ? 'Ste už zaregistrovaný? Prihláste sa' : 'Nie ste ešte zaregistrovaný? Zaregistrujte sa' }
                                </button>
                            )} */}
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

export default Login;

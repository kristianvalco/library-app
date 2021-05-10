import React, { useState } from 'react'
import { withRouter } from "react-router"
import logo from '../../assets/img/sosthe-logo.svg'

import Input from './Input'

// CSS
import './Login.scss'

const Login = () => {
    let myCurrentDate = new Date()
    let year = myCurrentDate.getFullYear();

    const [showPassword, setShowPassword] = useState(false); 
    const [isRegistered, setIsRegistered] = useState(false); 

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    
    // const handleSubmit = () => {
        
        // }
        
        const handleChange = () => {
            
        }

    const switchMode = () => { 
        setIsRegistered((prevIsRegistered) => !prevIsRegistered);
        handleShowPassword(false);
    }
        
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <form onSubmit=''>
                            <img src={logo} alt="" className="d-flex justify-content-center" />
                            { isRegistered && (
                                <>
                                    <Input name="firstName" type="name" placeholder="Meno" handleChange={handleChange} autoFocus className="email" />
                                    <Input name="lastName" type="name" placeholder="Priezvisko" handleChange={handleChange} autoFocus className="email" />
                                </>
                            )}
                            <Input name="email" type="email" placeholder="Email" handleChange={handleChange} autoFocus className="email" />
                            <Input name="password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} placeholder="Heslo" handleChange={handleChange} autoFocus className="password" />
                            { isRegistered && 
                                <Input name="confirmPassword" type="password" placeholder="Zopakujte heslo" handleChange={handleChange} autoFocus className="password" />
                            }

                            <button type="submit" className="btn btn-primary d-flex justify-content-center shadow-none">
                                { isRegistered ? 'Zaregistrovať sa' : 'Prihlásiť sa' }
                            </button>
                            <button onClick={switchMode} type="button" className="btn mt-3 d-flex justify-content-center shadow-none">
                                { isRegistered ? 'Ste už zaregistrovaný? Prihláste sa' : 'Nie ste ešte zaregistrovaný? Zaregistrujte sa' }
                            </button>
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

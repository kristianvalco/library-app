import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import app from './base'

const AuthPage = () => {
    const [currentUser, setCurrentUser] = useState()
    const provider = new firebase.auth.GoogleAuthProvider()

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

    const authWithGoogle = () 

    return (
        <div>
            
        </div>
    )
}

export default AuthPage

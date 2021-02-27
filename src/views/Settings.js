import React from 'react'
import firebase from 'firebase'

const Settings = () => {

    var user = firebase.auth().currentUser;

    const handleSubmit = (e) => {
        e.preventDefault()
        user.updateProfile()
    }

    const handleInput = (e) => {
        user.updateProfile({
            displayName: document.getElementById("name").value,
        })
    }

    return (
        <div>
            <h1>Nastavenia</h1>
            <form onSubmit={handleSubmit}>
                <input autoFocus id="name" type="text" onChange={handleInput} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Settings

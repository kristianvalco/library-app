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
        <div className="settings">
            <div className="row">
                <div className="col-xl-3">
                    <h1>Nastavenia</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            autoFocus 
                            id="name"
                            type="text"
                            className="form-control shadow-none"
                            onChange={handleInput} 
                        />
                        <button type="submit" className="btn btn-success shadow-none float-start mt-3">Odoslať</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings

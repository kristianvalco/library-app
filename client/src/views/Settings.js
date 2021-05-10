import React from 'react'

const Settings = () => {
    return (
        <div className="settings">
            <div className="row">
                <div className="col-xl-3">
                    <h1>Nastavenia</h1>
                    <form onSubmit=''>
                        <input 
                            autoFocus 
                            id="name"
                            type="text"
                            className="form-control shadow-none"
                            onChange=''
                        />
                        <button type="submit" className="btn btn-success shadow-none float-start mt-3">Odoslať</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings

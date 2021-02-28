import React from 'react'
import firebase from 'firebase'

// CSS
import './Dashboard.scss'

const Dashboard = () => {

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        name = user.displayName; // eslint-disable-line no-unused-vars
        email = user.email; // eslint-disable-line no-unused-vars
        photoUrl = user.photoURL; // eslint-disable-line no-unused-vars
        emailVerified = user.emailVerified; // eslint-disable-line no-unused-vars
        uid = user.uid; // eslint-disable-line no-unused-vars
    };

    // show name or email
    let showInfo;

    if (user.displayName == null) {
        showInfo = user.email;
    } else {
        showInfo = user.displayName;
    }

    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">

                    <h4 className="site-title">Dashboard</h4>
                </div>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="card welcome-card">
                            <div className="card-body">
                                <h5 className="card-title">Vitajte späť, {showInfo}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">50 000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">50 000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">50 000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

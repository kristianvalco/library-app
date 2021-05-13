import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getBooks } from '../actions/books';

// CSS
import './Dashboard.scss'

const Dashboard = () => {
    const books = useSelector((state) => state.books);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    var s = 0;
    for (var i = 0; i < books.length; i++) {
        s = s + books[i].count;
    }
    var count = s;

    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="site-title">Domov</h4>
                </div>
                <div className="row">
                    <div className="col-xl-3">
                        <div className="card welcome-card">
                            <div className="card-body">
                                <h5 className="card-title">Vitajte späť, {user?.result?.name}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Momentálne máme {books?.length} typy kníh.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Spolu máme {count} kníh.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">:)</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

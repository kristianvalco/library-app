import React, { useState } from 'react';

// components
import Books from '../components/Books/Books'
import Form from '../components/Form/Form';

// css
import './BooksTable.scss'

const BooksTable = () => {
    const [currentId, setCurrentId] = useState(null);

    // is sidebar active? false
    const [isActive, setActive] = useState("false");

    // close sidebar
    const Toggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="container-fluid bookstable">
            <div className="row">
                <div className="col-xl-6">
                    <h4 className="site-title">Knihy</h4>
                </div>
                <div className="col-xl-6">
                    <div className="addNew float-end mb-4">
                        <button onClick={Toggle} type="button" className="btn btn-primary shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            Pridať záznam
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="addform" className={`${isActive ? "addform" : "addform mb-4"}`}>
                        <div className={`${isActive ? "form" : "form active"}`}>
                            <Form toggle={Toggle} currentId={currentId} setCurrentId={setCurrentId} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <Books Toggle={Toggle} currentId={currentId} setCurrentId={setCurrentId}/>
                </div>
            </div>
        </div>
    )
}

export default BooksTable

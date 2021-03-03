import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { getBooks } from '../actions/books';

// components
import Book from '../components/Book/Book';
import Form from '../components/Form/Form';

// css
import './Books.scss'

const Books = () => {
    const books = useSelector((state) => state.books);

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBooks());
    }, [currentId, dispatch]);

    // is sidebar active? false
    const [isActive, setActive] = useState("false");

    // close sidebar
    const Toggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="container-fluid">
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
                    <div className="addform">
                        <div className={`${isActive ? "form" : "form active"}`}>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Názov</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Vydanie</th>
                                <th scope="col">Počet</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        {
                            !books.length ? <tbody className="spinner-border" role="status"></tbody> : (
                                <tbody>
                                    {books.map((book, i) => (
                                        <tr key={book._id}>
                                            <th scope="row" className="idNumber">{i+1}</th>
                                            <Book book={book} setCurrentId={setCurrentId} />
                                        </tr>
                                    ))}
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Books

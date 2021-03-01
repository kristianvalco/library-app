import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getBooks } from '../actions/books';

import Book from '../components/Book/Book';

import './Books.scss'

const Books = () => {
    const books = useSelector((state) => state.books);

    console.log(books);
    
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [currentId, dispatch]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <table class="table table-bordered bg-white">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Názov</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Vydanie</th>
                                <th scope="col">Počet</th>
                            </tr>
                        </thead>
                        {
                            !books.length ? <div className="spinner-border" role="status" /> : (
                                <tbody>
                                    {books.map((book) => (
                                        <tr key={book._id}>
                                            <td scope="row"></td>
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

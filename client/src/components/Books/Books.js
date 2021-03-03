import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { getBooks } from '../../actions/books';

// components
import Book from '../Books/Book/Book';

// css
import './Books.scss'

const Books = ({ currentId, setCurrentId, Toggle }) => {
    const books = useSelector((state) => state.books);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBooks());
    }, [currentId, dispatch]);
    
    return (
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
                                <th scope="row" className="idNumber">{i + 1}</th>
                                <Book book={book} setCurrentId={setCurrentId} Toggle={Toggle} />
                            </tr>
                        ))}
                    </tbody>
                )
            }
        </table>
    )
}

export default Books

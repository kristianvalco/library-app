import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteBook } from '../../../actions/books';

// css
import './Book.scss'

const Book = ({ book, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.count}</td>
            <td >
                <button onClick={() => dispatch(deleteBook(book._id))} className="btn-delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </td>
        </>
    )
}

export default Book

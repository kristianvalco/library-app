import React from 'react';
import { useDispatch } from 'react-redux';

const Book = ({ book }) => {
    const dispatch = useDispatch();

    return (
        <>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.count}</td>
        </>
    )
}

export default Book

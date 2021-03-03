import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { addNew } from '../../actions/books';

const Form = ({ currentId, setCurrentId, isActive }) => {

    const [bookData, setBookData] = useState({ title: '', author: '', year: '', count: '' });
    const book = useSelector((state) => currentId ? state.books.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (book) setBookData(book);
    }, [book])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            // dispatch(updatePost(currentId, postData));
        } else {
            dispatch(addNew(bookData));
        }
        clear();
    }

    const clear = () => {
        // setCurrentId(null);
        setBookData({ title: '', author: '', year: '', count: '' });
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                className="form-control shadow-none"
                placeholder="Názov"
                value={bookData.title}
                onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
            />
            <input
                type="text"
                name="author"
                className="form-control shadow-none"
                placeholder="Autor"
                value={bookData.author}
                onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
            />
            <input
                type="number"
                name="year"
                min="2000" max={moment().year()}
                className="form-control shadow-none"
                placeholder="Vydanie"
                value={bookData.year}
                onChange={(e) => setBookData({ ...bookData, year: e.target.value })}
            />
            <input
                type="number"
                name="count"
                min="0" max="999"
                className="form-control shadow-none"
                placeholder="Počet"
                value={bookData.count}
                onChange={(e) => setBookData({ ...bookData, count: e.target.value })}
            />
            <div className="mt-4">
                <button type="submit" className="btn btn-primary shadow-none float-end ms-3">Odoslať</button>
                <button onClick={clear} className="btn btn-primary shadow-none float-end">Clear</button>
            </div>
        </form>
    )
}

export default Form

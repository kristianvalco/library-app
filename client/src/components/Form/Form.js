import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { addNew, updateBook } from '../../actions/books';

// css
import './Form.scss'

const Form = ({ currentId, setCurrentId, Toggle}) => {

    const [bookData, setBookData] = useState({ title: '', author: '', year: '', count: '' });
    const book = useSelector((state) => currentId ? state.books.find((b) => b._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (book) setBookData(book);
    }, [book])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateBook(currentId, bookData));
        } else {
            dispatch(addNew(bookData));
        }
        clear();
        Toggle();
    }

    const clear = () => {
        setCurrentId(null);
        setBookData({ title: '', author: '', year: '', count: '' });
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input
                id="text"
                type="text"
                name="title"
                className="form-control shadow-none"
                placeholder="Názov"
                value={bookData.title}
                onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                required
                maxlength="50"
            />
            <input
                type="text"
                name="author"
                className="form-control shadow-none"
                placeholder="Autor"
                value={bookData.author}
                onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
                required
                maxlength="50"
            />
            <input
                type="text"
                name="year"
                min="1900" max={moment().year()}
                className="form-control shadow-none"
                placeholder="Vydanie"
                value={bookData.year}
                onChange={(e) => setBookData({ ...bookData, year: e.target.value.replace(/\D/g, "") })}
                required
            />
            <input
                type="text"
                name="count"
                min="0" max="999"
                className="form-control shadow-none"
                placeholder="Počet"
                value={bookData.count}
                onChange={(e) => setBookData({ ...bookData, count: e.target.value.replace(/\D/g, "")})}
                required
            />
            <div className="mt-4 bg-black">
                <button type="submit" className="btn btn-success shadow-none float-end ms-3">Odoslať</button>
                <button onClick={Toggle} className="btn btn-secondary shadow-none float-end">Zatvoriť</button>
            </div>
        </form>
    )
}

export default Form

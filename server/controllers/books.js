import mongoose from 'mongoose';
import Book from '../models/book.js';

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        // const books = await Book.find().sort('-createdAt');

        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addNew = async (req, res) => {
    const book = req.body;

    const newBook = new Book(book);

    try {
        newBook.save();

        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBook = async (req, res) => {
    const { id: _id } = req.params;
    const book = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No book with that id');

    const updatedBook = await Book.findByIdAndUpdate(_id, { ...book, _id }, { new: true });

    res.json(updatedBook);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No book with that id');

    await Book.findByIdAndRemove(id);

    res.json({ message: 'Book deleted successfully!' });
}
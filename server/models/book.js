import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    count: {
        type: Number,
        default: 0
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    year: {
        type: Number,
        default: 0
    },
    count: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
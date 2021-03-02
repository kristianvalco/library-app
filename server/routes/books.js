import express from 'express';

import { getBooks, addNew, updateBook, deleteBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', addNew);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
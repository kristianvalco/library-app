import express from 'express';

import { getBooks, addNew, updateBook, deleteBook } from '../controllers/books.js';
import login from '../middleware/login.js';

const router = express.Router();

router.get('/', login, getBooks);
router.post('/', login, addNew);
router.patch('/:id', login, updateBook);
router.delete('/:id', login, deleteBook);

export default router;
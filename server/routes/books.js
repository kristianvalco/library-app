import express from 'express';

import { getBooks, addNew } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', addNew);

export default router;
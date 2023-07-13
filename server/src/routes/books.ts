import { Router } from 'express';
import booksController from '../controllers/BookController';

const router = Router();

router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getOneBookById);
router.delete('/books/:id', booksController.deleteOneBookById);
router.post('/books', booksController.addOneBook);

export default router;
